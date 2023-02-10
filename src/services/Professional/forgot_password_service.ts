import { prisma } from '@config/prisma'
import { Professional } from '@prisma/client';
const crypto = require("crypto");
import AppError from '../../error/AppError';
const nodemailer = require("nodemailer");
import { hash } from 'bcrypt'


export class ForgotPasswordService {
  async execute(email: string): Promise<Professional> {
    const user = await prisma.professional.findFirst({ where: { email } });
    if (!user) {
      throw new AppError("Profissional não encontrado no sistema!");
    }
    const tempPassword = crypto.randomBytes(4).toString("hex");
    
    const hashedPassword = await hash(tempPassword, 8)
    await prisma.professional.update({
      where: { id:user.id },
      data: { password: hashedPassword },
    });

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
      from: "sender@example.com",
      to: email,
      subject: "Recuperação de senha",
      text: `Aqui está sua senha temporária: ${tempPassword}`,
    };
    await transporter.sendMail(message);

    return tempPassword
    }

}