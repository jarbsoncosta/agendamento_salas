
import { prisma } from '@config/prisma'
import { Scheduling } from '@prisma/client'
import AppError from 'src/error/AppError';

interface SchedulingProps{
  title:string;
  professionalId:string;
  inspectorateId:string;
  dateInitial:Date;
  dateFinish:string;
  status:string;
  messageStatus:string
}
export class CreateSchedulingService {
  async execute({
     title,
     dateInitial,
     dateFinish,
     professionalId,
     inspectorateId,
     status,
     messageStatus
     }: SchedulingProps): Promise<Scheduling> {
  

    const scheduling = await prisma.scheduling.create({
      data: {
        title,
        dateInitial,
        dateFinish,
        professionalId,
        inspectorateId,
        status,
        messageStatus
      }
    })
    return scheduling
  }
}