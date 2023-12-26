
import { prisma } from '@config/prisma'
import {  SchedulingBaia } from '@prisma/client';

//Listar todas as reservas

export class ListReservasService {
  async execute(inspectorateId:string): Promise<SchedulingBaia[]> {
    const currentDate = new Date();
    const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const result = await prisma.schedulingBaia.findMany({
      orderBy:{
        numberBaia:'asc',
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