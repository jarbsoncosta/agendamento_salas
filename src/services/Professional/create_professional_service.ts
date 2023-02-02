import { prisma } from '@config/prisma'
import { Professional } from '@prisma/client'
import AppError from 'src/error/AppError';
import { hash } from 'bcrypt'

interface ProfessionalProps{
  name:string;
  cpf:string;
  password:string;
  professionalTitle:string;
  confirmPassword:string
}
export class CreateProfessionalService {
  async execute({ name, cpf, password,professionalTitle, confirmPassword }: ProfessionalProps): Promise<Professional> {

    const professionalExists = await prisma.professional.findFirst({
      where: { cpf }
    })
    if (professionalExists) {
      throw new AppError("Usuário já cadastrado no sistema")
    }
    if (confirmPassword !== password) {
      throw new AppError('Confirmação de senha não confere!')
    }
    
    const hashedPassword = await hash(password, 8)
    const professional = await prisma.professional.create({
      data: {
        name,
        cpf,
        professionalTitle,
        password: hashedPassword,        
      }
    })
    return professional
  }
}