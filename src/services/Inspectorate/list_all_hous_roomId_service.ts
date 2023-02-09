
import { prisma } from '@config/prisma'
import { Hour } from '@prisma/client';
import AppError from '../../error/AppError';


export class ListAllHoursRoomIdService {
  async execute(roomId: string): Promise<Hour[]> {
    const room = await prisma.room.findFirst({ where: { id:roomId }})

    if(!room){
      throw new AppError("Sala não encontrada")
    }

    const hours = await prisma.hour.findMany({
      where: {
        roomId
      },
     
    })
    return hours
  }
}