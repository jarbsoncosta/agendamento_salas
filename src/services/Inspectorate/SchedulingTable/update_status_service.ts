import { prisma } from "@config/prisma";
import {SchedulingTable } from "@prisma/client";
import AppError from "../../../error/AppError";


//Serviço para atualizar o status da reserva da cadeira para true
export class UpdataStatusSchedulingTableService {
  async execute(id: string): Promise<SchedulingTable> {
    const schedulingExists = await prisma.schedulingTable.findFirst({
      where: {
        id,
      },
    });
    if (!schedulingExists) {
      throw new AppError("Reserva não encontrado");
    }

    const resp = await prisma.schedulingTable.update({
      where: {
        id: schedulingExists.id,
      },
      data: {
        status: true,
        dateFinal: new Date()
      },
    });
    return resp;
  }
}
