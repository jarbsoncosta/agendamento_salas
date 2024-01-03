
import { prisma } from '@config/prisma'
import { MesaIndividual } from '@prisma/client'

//Listar todas as mesas individuais
export class ListMesasIndividuaisService {
  async execute(inspectorateId:string): Promise<MesaIndividual[]> {
    const result = await prisma.mesaIndividual.findMany({
      orderBy:{
        numberMesa:'asc'
      },
      where:{
        inspectorateId
      },include:{
       schedulingMesaIndividual:true
      }
      
    }, 
    
    )

    return result
  }
}