import { prisma } from "@config/prisma";
import { Scheduling } from "@prisma/client";
import AppError from "../../error/AppError";
import { envioMensagemBotTelegran } from "@config/bot_telegran";

interface SchedulingProps {
  title: string;
  nameProfissional: string;
  cpfProfissional: string;
  inspectorateId: string;
  hourInitial: number;
  hourFinish: number;
  roomId: string;
  status: string;
  createdAt: string;
  messageStatus: string;
  emailProfissional: string;
  tituloPrincipalProfissional: string;
  convidados?: Convidados[];
}

interface Convidados {
  nome: string;
  cpf: string;
}

export class CreateSchedulingService {
  async execute({
    title,
    hourInitial,
    hourFinish,
    createdAt,
    nameProfissional,
    cpfProfissional,
    emailProfissional,
    inspectorateId,
    roomId,
    status,
    messageStatus,
    tituloPrincipalProfissional,
    convidados
  }: SchedulingProps): Promise<Scheduling> {

    //Listar o termo de ciencia que está ativp
   const responseTerm = await prisma.termoCiencia.findFirst({
    where:{
      active:true
    },     
  })
    
    const existingSchedules = await prisma.scheduling.findMany({
      where: {
        createdAt: createdAt,
        roomId: roomId,
      },
    })

    for (let i = 0; i < existingSchedules.length; i++) {
      const {
        hourInitial: existingInitial,
        hourFinish: existingFinish,
      } = existingSchedules[i];

      // Verifica se o novo agendamento começa durante um agendamento existente
      if (hourInitial >= existingInitial && hourInitial < existingFinish) {
        throw new AppError(
          `Já existe um agendamento para esta sala no horário de ${existingInitial}h às ${existingFinish}h.`
        );
      }

      // Verifica se o novo agendamento começa imediatamente após um agendamento existente
      if (hourInitial === existingFinish) {
        // Se houver um próximo agendamento
        if (existingSchedules[i + 1]) {
          const nextExistingInitial = existingSchedules[i + 1].hourInitial;
          // Se o próximo agendamento começar imediatamente após este agendamento e houver menos de 1 hora de intervalo, bloqueie o agendamento
          if (nextExistingInitial - hourFinish < 1) {
            throw new AppError(
              `Já existe um agendamento neste intervalo. O próximo agendamento deve começar após as ${hourFinish}h.`
            );
          }
        }
      }
    }

    const scheduling = await prisma.scheduling.create({
      data: {
        title,
        hourInitial,
        hourFinish,
        createdAt,
        cpfProfissional,
        nameProfissional,
        emailProfissional,
        inspectorateId,
        roomId,
        status,
        messageStatus,
        tituloPrincipalProfissional,
        termoCienciaId:responseTerm.id
      },
    });

    for (const pessoa of convidados) {
      try {
         await prisma.convidado.create({
          data: {
            nome: pessoa.nome,
            cpf: pessoa.cpf,
            schedulingId:scheduling.id
          },
        });
       
      } catch (erro) {
        console.error(`Erro ao salvar os convidados: ${erro.message}`);
      }
    }

    envioMensagemBotTelegran(scheduling.id);

    return scheduling;
  }
}
