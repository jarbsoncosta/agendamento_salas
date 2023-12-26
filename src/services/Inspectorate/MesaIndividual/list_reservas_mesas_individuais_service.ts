
import { prisma } from '@config/prisma'
import { SchedulingMesaIndividual } from '@prisma/client';

//Listar todas as mesas individuais

export class ListReservasMesasIndividuaisService {
  async execute(inspectorateId:string): Promise<SchedulingMesaIndividual[]> {
    const currentDate = new Date();
    const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const result = await prisma.schedulingMesaIndividual.findMany({
      orderBy:{
        numberMesa:'asc',
      },
      where: {
        status: false,
        inspectorateId,
        dateInitial: {
          gte: currentDateWithoutTime, // >= currentDateWithoutTime para incluir as reservas do dia
          lt: new Date(currentDateWithoutTime.getTime() + 24 * 60 * 60 * 1000), // < próximo dia
        },
      }

    })
    return result
  }
}