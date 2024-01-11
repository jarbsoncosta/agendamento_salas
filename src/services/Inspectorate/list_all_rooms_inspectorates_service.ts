
import { prisma } from '@config/prisma'
import { Room } from '@prisma/client';
import AppError from '../../error/AppError';


export class ListAllRoomsInspectoratesService {
  async execute(inspetoriaId: string): Promise<Room[]> {
    const inspectorate = await prisma.inspectorate.findFirst({where:{
      id:inspetoriaId
    }})
    if(!inspectorate){
      throw new AppError("Inspetoria não encontrada")
    }
    const rooms = await prisma.room.findMany({
      where: {
        inspetoriaId,        
      },
      
    })
    return rooms
  }
}