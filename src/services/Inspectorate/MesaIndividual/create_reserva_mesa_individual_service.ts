import { prisma } from "@config/prisma";
import { SchedulingMesaIndividual } from "@prisma/client";

interface DataProps {
  numberMesa: number;
  nameProfissional: string;
  inspectorateId: string;
  mesaIndividualId:string
}

export class CreateReservaMesaIndividualService {
  async execute({
    nameProfissional,
    numberMesa,
    inspectorateId,
    mesaIndividualId
  }: DataProps): Promise<SchedulingMesaIndividual> {
    const resp = await prisma.schedulingMesaIndividual.create({
      data: {
        nameProfissional,
        numberMesa,
        inspectorateId,
        mesaIndividualId
      },
    });
    return resp;
  }
}
