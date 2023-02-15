import { prisma } from '@config/prisma'
import { Professional } from '@prisma/client'
import AppError from '../../error/AppError';
import { hash } from 'bcrypt'

interface ProfessionalProps {
  id: string;
  password: string;
  confirmPassword: string
}

export class UpdatePasswordProfessionalService {
  async execute({id, password, confirmPassword}:ProfessionalProps): Promise<Professional> {
    const professionalExists = await prisma.professional.findFirst({
      where: { id }
    })
    if (!professionalExists) {
      throw new AppError("Profissional não encrontrado!")
    }
    if (confirmPassword !== password) {
      throw new AppError('Confirmação de senha não confere !')
    }

    const hashedPassword = await hash(password, 8)
    const professional = await prisma.professional.update({
      where: {
        id
      },
      data: {
        password: hashedPassword

      }
    })
    return professional
  }
}