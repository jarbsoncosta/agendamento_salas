import { prisma } from "@config/prisma";
import {SchedulingMesaIndividual } from "@prisma/client";
import AppError from "../../../error/AppError";


//Serviço para atualizar o status da reserva da mesa individual para true
export class UpdataStatusReservaMesaIndividualService {
  async execute(id: string): Promise<SchedulingMesaIndividual> {
    const reservaExists = await prisma.schedulingMesaIndividual.findFirst({
      where: {
        id,
      },
    });
    if (!reservaExists) {
      throw new AppError("Reserva não encontrado");
    }

    const resp = await prisma.schedulingMesaIndividual.update({
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
