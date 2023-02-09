
import { prisma } from '@config/prisma'
import { Scheduling } from '@prisma/client';
import AppError from '../../error/AppError';


export class ListAllSchedulingService {
  async execute(professionalId:string): Promise<Scheduling[]> {
    const professional = await prisma.professional.findFirst({where:{id:professionalId}})
    if (!professional){
      throw new AppError("Profissional não encontrado")
    }

    const shedulings = await prisma.scheduling.findMany({
      where:{
        professionalId
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