
import { prisma } from '@config/prisma'
import AppError from '../../error/AppError';

interface SchedulingProps {
  id: string
  status: string;
  professionalId: string
}

export class CancelSchedulingProfessionalIdService {
  async execute({ id, professionalId, status }: SchedulingProps): Promise<void> {
    const professional = await prisma.professional.findFirst({ where: { id: professionalId } })
    if (!professional) {
      throw new AppError("Profissional não encontrado")
    }
    const scheduling = await prisma.scheduling.findFirst({ where: { id } })
    if (!scheduling) {
      throw new AppError("Agendamento não encontrado")
    }
    await prisma.scheduling.updateMany({
      where: {
        id,
        professionalId
      },
      data: {
        status,
      }
    })

  }
}