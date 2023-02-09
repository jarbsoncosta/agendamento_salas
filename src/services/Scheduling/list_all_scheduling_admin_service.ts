
import { prisma } from '@config/prisma'
import { Scheduling } from '@prisma/client';


export class ListAllSchedulingAdminService {
  async execute(): Promise<Scheduling[]> { 

    const shedulings = await prisma.scheduling.findMany({
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
        professional:{
          select:{
            name:true,
            professionalTitle:true
          }
        }

      }
    })
    return shedulings
  }
}