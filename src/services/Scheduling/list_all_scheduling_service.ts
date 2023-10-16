
import { prisma } from '@config/prisma'
import { Scheduling } from '@prisma/client';
import AppError from '../../error/AppError';


export class ListAllSchedulingService {
  async execute(cpfProfissional:string): Promise<Scheduling[]> {

    const shedulings = await prisma.scheduling.findMany({
      where:{
        cpfProfissional
      },
      include:{
        inspectorate:{
          select:{
            name:true
          }
        },
        room:{
          select:{
            name:true
          }
        
        },
     }
    })
    return shedulings
  }
}