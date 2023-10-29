import { prisma } from '@config/prisma';
import { Scheduling } from '@prisma/client';
import AppError from '../../error/AppError';

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
  emailProfissional:string
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
  }: SchedulingProps): Promise<Scheduling> {
    const existingSchedules = await prisma.scheduling.findMany({
      where: {
        createdAt: createdAt,
        roomId: roomId,
      },
    });

    for (let i = 0; i < existingSchedules.length; i++) {
      const { hourInitial: existingInitial, hourFinish: existingFinish } = existingSchedules[i];
    
      // Verifica se o novo agendamento começa durante um agendamento existente
      if (hourInitial >= existingInitial && hourInitial < existingFinish) {
        throw new AppError(`Já existe um agendamento para esta sala no horário de ${existingInitial}h às ${existingFinish}h.`);
      }
    
      // Verifica se o novo agendamento começa imediatamente após um agendamento existente
      if (hourInitial === existingFinish) {
        // Se houver um próximo agendamento
        if (existingSchedules[i + 1]) {
          const nextExistingInitial = existingSchedules[i + 1].hourInitial;
          // Se o próximo agendamento começar imediatamente após este agendamento e houver menos de 1 hora de intervalo, bloqueie o agendamento
          if (nextExistingInitial - hourFinish < 1) {
            throw new AppError(`Já existe um agendamento neste intervalo. O próximo agendamento deve começar após as ${hourFinish}h.`);
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
      },
    });
    return scheduling;
  }
}
