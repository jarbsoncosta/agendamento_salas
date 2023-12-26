
import { prisma } from '@config/prisma'
import { Baia} from '@prisma/client';

interface DataTable{
  number:number;
  inspectorateId: string;
  status: boolean
  
}

//Serviço para criação de cadeiras para uma mesa
export class CreateBaiaService {
  async execute({number,inspectorateId}:DataTable): Promise<Baia> {
   
    const resp =  await prisma.baia.create({
      data:{
       number,
       inspectorateId,
       status:false      
      }
    })
    return resp
  }
}