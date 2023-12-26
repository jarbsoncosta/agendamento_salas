
import { prisma } from '@config/prisma'
import { Table } from '@prisma/client';


interface DataTable{
  number:number;
  inspectorateId:string;
  
}

//Serviço para criação de Mesa 
export class CreateTableService {
  async execute({number, inspectorateId}:DataTable): Promise<Table> {
   
    const resp =  await prisma.table.create({
      data:{
       number,
       inspectorateId
      }
    })
    return resp
  }
}