import { prisma } from "@config/prisma";
import AppError from "../../error/AppError";
import { formatarCPF } from "../../utils/formatCpf";
const nodemailer = require("nodemailer");

interface SchedulingProps {
  title: string;
  id: string;
  status: string;
  messageStatus: string;
}
export class UpdateSchedulingService {
  async execute({
    id,
    title,
    status,
    messageStatus,
  }: SchedulingProps): Promise<void> {
    const scheduling = await prisma.scheduling.findFirst({
      where: {
        id,
      },
      include: {
        inspectorate: {
          select: {
            name: true,
          },
        },
        room: {
          select: {
            name: true,
          },
        },
      },
    });

    //Buscar os convidados do agendamento
    const convidadosArray = await prisma.convidado.findMany({
      where: {
        schedulingId: scheduling.id,
      },
    });

    if (!scheduling) {
      throw new AppError("Agendamento não encontrado");
    }
    const response = await prisma.scheduling.update({
      where: {
        id,
      },
      data: {
        title,
        status,
        messageStatus,
      },
    });

    const {
      emailProfissional,
      nameProfissional,
      hourFinish,
      hourInitial,
    } = scheduling;

    //formatar data
    function formatarData(dataCompleta) {
      // Dividir a string da data nos espaços
      const partes = dataCompleta.split(" ");

      // A parte desejada é a primeira parte (índice 0)
      const data = partes[0];

      return data;
    }

    const convidadosString = convidadosArray
      .map((item) => {
        return `<tr><td>${item.nome}, ${formatarCPF(item.cpf)}</td></tr>`;
      })
      .join("");
    let emailContent = "";
    if (response.status === "Agendamento confirmado") {
      emailContent = `Seu agendamento foi confirmado no  ${
        scheduling.inspectorate.name
      }, sala ${scheduling.room.name} no dia ${formatarData(
        response.createdAt
      )} e horário ${hourInitial}hs as ${hourFinish}hs`;
    } else {
      emailContent = `Seu agendamento foi reprovado, pelo seguinte motivo : ${response.messageStatus}`;
    }

    try {
      const transporter = await nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      const message = {
        from: {
          address: "agendamento.coworking@crea-rn.org.br",
          name: "Coworking Crea-RN",
        },
        to: {
          address: emailProfissional,
        },
        subject: "Agendamento Coworking",
        html: `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email de Exemplo</title>
      </head>
      
      <body style="font-family: Arial, sans-serif;">      
         <table style="max-width: 800px; margin: 0 auto; padding: 20px 3rem; border: 1px solid #ccc; border-radius: 10px;">
          <tr>
              <td style="text-align: center;">
                  <img src="https://transparencia.crea-rn.org.br/wp-content/uploads/2021/02/bannercrearn.png" alt="Logo" style="max-width: 250px; margin-bottom: 20px;">
              </td>
          </tr>
          <tr>
              <td style="text-align: center; font-size: 24px; font-weight: bold;">
               Olá, ${nameProfissional}             
              </td>
          </tr>
          <tr>
              <td style="padding: 20px 0; text-align: center">
                  <p>${emailContent} </p>
                  
              </td>
             
          </tr>
          <td>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">    
                           
                   ${
                     convidadosString.length > 0
                       ? ` <div style="border-bottom:1px solid #ccc;"><strong>Convidados</strong></div>`
                       : ""
                   } 
                  <div>${convidadosString} </div>
                 
                </div>
                <div style="margin-top: 1rem;">
                  <strong>Para mais informações - (84) 99128-3827 </strong>
              </div>
          </td>
         
         
         </tr>
      </table>
      
      </body>
      
      </html>
    `,
      };
      await transporter.sendMail(message);
    } catch (error) {
      console.log(error);
      throw new AppError(
        "Erro ao enviar e-mail de confirmação para profissional"
      );
    }
  }
}
