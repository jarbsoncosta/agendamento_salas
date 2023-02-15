import { prisma } from '@config/prisma'
import { Professional } from '@prisma/client'
import AppError from '../../error/AppError';
import { hash } from 'bcrypt'

interface ProfessionalProps{
  id:string;
  name?:string;
  email?:string;
  professionalTitle?:string
  
}
export class UpdateDataProfessionalService {
  async execute({ id, name,email, professionalTitle }: ProfessionalProps): Promise<Professional> {
    const professionalExists = await prisma.professional.findFirst({
      where: { id}
    })
    if (!professionalExists) {
      throw new AppError("Profissional não encrontrado!")
    }

    const professional = await prisma.professional.update({
      where:{
        id
      },
      data: {
        name,
        email,
        professionalTitle            
      }
    })
    return professional
  }
}