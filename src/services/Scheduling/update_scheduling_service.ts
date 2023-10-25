
import { prisma } from '@config/prisma'
import AppError from '../../error/AppError';

interface SchedulingProps {
  title: string;
  id:string
  status: string;
  messageStatus: string
  email:string
}
export class UpdateSchedulingService {
  async execute({
    id,
    title,
    status,
    messageStatus,
    email
  }: SchedulingProps): Promise<void> {

    const scheduling = await prisma.scheduling.findFirst({where:{id}})
    const emailProfissional = email

    if(!scheduling){
      throw new AppError("Agendamento não encontrado")
    }
     const response = await prisma.scheduling.update({
      where:{
        id
      },
      data: {
        title,      
        status,
        messageStatus
      }
    })

    console.log({data:{emailProfissional, response}})
   
  }
}