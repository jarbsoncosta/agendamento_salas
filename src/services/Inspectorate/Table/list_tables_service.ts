
import { prisma } from '@config/prisma'
import {  Table } from '@prisma/client';
import AppError from "../../../error/AppError";

//Listar todas as mesas, com as cadeiras

export class ListTablesService {
  async execute(inspectorateId:string): Promise<Table[]> {
    const currentDate = new Date();
    const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const inspectorateExists = await prisma.inspectorate.findFirst({
      where: {
        id:inspectorateId,
      },
    });
    if (!inspectorateExists) {
      throw new AppError("Inspetoria não encontrado");
    }
    const result = await prisma.table.findMany({include:{
      Chairs:true,
      schedulingTable:{
        where:{
          status: false, 
          dateInitial: {
            gte: currentDateWithoutTime, // >= currentDateWithoutTime para incluir as reservas do dia
            lt: new Date(currentDateWithoutTime.getTime() + 24 * 60 * 60 * 1000), // < próximo dia
          },       
        },
        orderBy:{
          number:'asc'
        }
      }

    },
  where:{
    inspectorateId
  }
  })
    return result
  }
}