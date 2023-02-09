
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
    const diaExistente = schedulingExists.find(element => String(element.createdAt) == String(createdAt));  
    const horaExistente =  schedulingExists.find(element => String(element.hourInitial) == String(hourInitial))
    const sala = schedulingExists.find(element => String(element.roomId) == String(roomId))
  


    if(diaExistente && diaExistente && horaExistente && sala){
      throw new AppError("Já existe um agendamento para esta sala e horário ")
    }

    // Expected output: 12
    /*
    const schedulingsLegth = await prisma.scheduling.findMany()
    
    if(schedulingsLegth.length > 7){
      throw new AppError("Limite diario de agendamento excedido")
    }
    */

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