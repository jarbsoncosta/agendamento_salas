
import { prisma } from '@config/prisma'
import { Hour } from '@prisma/client';


interface DataHour{
  hInitial:number;
  hFinal:number;
  roomId:string
}

export class CreateHourService {
  async execute({hInitial,hFinal,roomId}:DataHour): Promise<Hour> {
   
    const resp =  await prisma.hour.create({
      data:{
        hInitial,
        hFinal,
       roomId
      }
    })
    return resp
  }
}