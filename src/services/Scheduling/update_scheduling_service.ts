import { prisma } from "@config/prisma";
import AppError from "../../error/AppError";
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

    if (!scheduling) {
      throw new AppError("Agendamento não encontrado");
    }
   await prisma.scheduling.update({
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
      inspectorate,
      room,
    } = scheduling;
    const transporter = await nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    const message = {
      from: {
        address: "sender@example.com",
        name: "Mailtrap Test",
      },
      to: {
        address: emailProfissional,
        name: "John Doe",
      },
      subject: "Confirmação de Agendamento",
      html: `
      <!doctype html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body style="font-family: sans-serif;">
          <div style="display: block; margin: auto; max-width: 600px;" class="main">
            <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">Ola ${nameProfissional}, agendamento confirmado </h1>
            <p>Inspetoria ${inspectorate.name} na sala ${room.name}.</p>
            <img alt="Inspect with Tabs" src="cid:welcome.png" style="width: 100%;">
            <p>Now send your email using our fake SMTP server and integration of your choice!</p>
            <p>Good luck! Hope it works.</p>
          </div>
          <!-- Example of invalid for email html/css, will be detected by Mailtrap: -->
          <style>
            .main { background-color: white; }
            a:hover { border-left-width: 1em; min-height: 2em; }
          </style>
        </body>
      </html>
    `,
    };
    await transporter.sendMail(message);
  }
}
