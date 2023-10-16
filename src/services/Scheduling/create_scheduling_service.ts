
import { prisma } from '@config/prisma'
import { Scheduling } from '@prisma/client'
import AppError from '../../error/AppError';


interface SchedulingProps {
  title: string;
  nameProfissional: string;
  cpfProfissional:string;
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
    nameProfissional,
    cpfProfissional,
    inspectorateId,
    roomId,
    status,
    messageStatus
  }: SchedulingProps): Promise<Scheduling> {

    const schedulingExists = await prisma.scheduling.findMany()
    const diaExistente = schedulingExists.find(element => element.createdAt === createdAt);  
    const horaExistenteInicial =  schedulingExists.find(element => element.hourInitial === (hourInitial))
    const horaExistenteFinal =  schedulingExists.find(element => element.hourFinish === (hourFinish))
    const sala = schedulingExists.find(element => element.roomId === roomId)

    console.log(horaExistenteInicial?.hourFinish, horaExistenteFinal?.hourFinish)

  
    if( diaExistente && horaExistenteInicial && sala){
      throw new AppError("Já existe um agendamento para esta sala e horário ")
    }

   
    const scheduling = await prisma.scheduling.create({
      data: {
        title,
        hourInitial,
        hourFinish,
        createdAt,
        cpfProfissional,
        nameProfissional,
        inspectorateId,
        roomId,
        status,
        messageStatus
      }
    })
    return scheduling
  }
}