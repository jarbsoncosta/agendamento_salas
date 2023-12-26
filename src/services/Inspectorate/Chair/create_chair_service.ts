
import { prisma } from '@config/prisma'
import { Chair } from '@prisma/client';


interface DataTable{
  number:number;
  tableId:string;
  status: boolean
  
}

//Serviço para criação de cadeiras para uma mesa
export class CreateChairService {
  async execute({number,status,tableId}:DataTable): Promise<Chair> {
   
    const resp =  await prisma.chair.create({
      data:{
       number,
       tableId,
       status
      }
    })
    return resp
  }
}