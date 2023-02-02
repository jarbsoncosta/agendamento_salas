import { prisma } from '@config/prisma'
import { Admin } from '@prisma/client'
import AppError from 'src/error/AppError';
import { hash } from 'bcrypt'

interface AdminProps{
  name:string;
  email:string;
  password:string;
  confirmPassword:string
}
export class CreateAdminService {
  async execute({ name, email, password, confirmPassword }: AdminProps): Promise<Admin> {
    const adminExists = await prisma.admin.findFirst({
      where: { email }
    })
    if (adminExists) {
      throw new AppError("Usuário já cadastrado no sistema")
    }
    if (confirmPassword !== password) {
      throw new AppError('Confirmação de senha não confere!')
    }

    const hashedPassword = await hash(password, 8)

    const admin = await prisma.admin.create({
      data: {
        name,
        email,
        password: hashedPassword,        
      }
    })
    return admin
  }
}