import { prisma } from '@config/prisma'
import { Room } from '@prisma/client';

//import AppError from 'src/error/AppError';

interface DataRoom{
  name:string;
  description:string;
  inspetoriaId:string
}

export class CreateRoomService {
  async execute({name, description, inspetoriaId}:DataRoom): Promise<Room> {
   
    const room =  await prisma.room.create({
      data:{
        name,
        description,
        inspetoriaId
      }
    })
    return room
  }
}