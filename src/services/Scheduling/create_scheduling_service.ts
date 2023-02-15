
import { prisma } from '@config/prisma'
import { Scheduling } from '@prisma/client'
import AppError from '../../error/AppError';


interface SchedulingProps {
  title: string;
  professionalId: string;
  inspectorateId: string;
  hourInitial: number,
  hourFinish: number,
  roomId: string;
  status: string;
  createdAt: string;
  messageStatus: string
}
export class CreateSchedulingService {
  async execute({
    title,
    hourInitial,
    hourFinish,
    createdAt,
    professionalId,
    inspectorateId,
    roomId,
    status,
    messageStatus
  }: SchedulingProps): Promise<Scheduling> {

    const schedulingExists = await prisma.scheduling.findMany()
    const diaExistente = schedulingExists.find(element => element.createdAt === createdAt);  
    const horaExistente =  schedulingExists.find(element => String(element.hourInitial) === String(hourInitial))
    const sala = schedulingExists.find(element => element.roomId === roomId)
  
    if( diaExistente && horaExistente && sala){
      throw new AppError("Já existe um agendamento para esta sala e horário ")
    }

    const scheduling = await prisma.scheduling.create({
      data: {
        title,
        hourInitial,
        hourFinish,
        createdAt,
        professionalId,
        inspectorateId,
        roomId,
        status,
        messageStatus
      }
    })
    return scheduling
  }
}