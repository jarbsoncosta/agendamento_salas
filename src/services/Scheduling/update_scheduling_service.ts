
import { prisma } from '@config/prisma'
import AppError from '../../error/AppError';

interface SchedulingProps {
  title: string;
  id:string
  status: string;
  messageStatus: string
}
export class UpdateSchedulingService {
  async execute({
    id,
    title,
    status,
    messageStatus
  }: SchedulingProps): Promise<void> {

    const scheduling = await prisma.scheduling.findFirst({where:{id}})

    if(!scheduling){
      throw new AppError("Agendamento não encontrado")
    }
     await prisma.scheduling.update({
      where:{
        id
      },
      data: {
        title,      
        status,
        messageStatus
      }
    })
   
  }
}