import { prisma } from "@config/prisma";
import { SchedulingBaia } from "@prisma/client";

interface DataProps {
  numberBaia: number;
  nameProfissional: string;
  inspectorateId: string;
}

export class CreateReservaBaiaService {
  async execute({
    nameProfissional,
    numberBaia,
    inspectorateId,
  }: DataProps): Promise<SchedulingBaia> {
    const resp = await prisma.schedulingBaia.create({
      data: {
        nameProfissional,
        numberBaia,
        inspectorateId,
      },
    });
    return resp;
  }
}
