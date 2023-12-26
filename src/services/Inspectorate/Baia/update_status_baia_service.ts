import { prisma } from "@config/prisma";
import {SchedulingBaia } from "@prisma/client";
import AppError from "../../../error/AppError";


//Serviço para atualizar o status da reserva da Baia para true
export class UpdataStatusReservaBaiaService {
  async execute(id: string): Promise<SchedulingBaia> {
    const reservaExists = await prisma.schedulingBaia.findFirst({
      where: {
        id,
      },
    });
    if (!reservaExists) {
      throw new AppError("Reserva não encontrado");
    }

    const resp = await prisma.schedulingBaia.update({
      where: {
        id: reservaExists.id,
      },
      data: {
        status: true,
        dateFinal: new Date()
      },
    });
    return resp;
  }
}
