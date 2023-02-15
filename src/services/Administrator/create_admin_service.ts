import { prisma } from '@config/prisma'
import { Admin } from '@prisma/client'
import AppError from '../../error/AppError';
import { hash } from 'bcrypt'

interface AdminProps{
  name:string;
  email:string;
  password:string;
 
}
export class CreateAdminService {
  async execute({ name, email, password }: AdminProps): Promise<Admin> {
    const adminExists = await prisma.admin.findFirst({
      where: { email }
    })
    if (adminExists) {
      throw new AppError("Usuário já cadastrado no sistema")
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