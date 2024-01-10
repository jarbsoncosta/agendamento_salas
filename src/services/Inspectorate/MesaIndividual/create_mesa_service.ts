import { prisma } from "@config/prisma";
import { MesaIndividual } from "@prisma/client";

interface DataTable {
  numberMesa: number;
  inspectorateId: string;
  status: boolean;  
}

//Serviço para criação de mesa individual
export class CreateMesaIndividualService {
  async execute({ numberMesa, inspectorateId }: DataTable): Promise<MesaIndividual> {
    const resp = await prisma.mesaIndividual.create({
      data: {
        numberMesa,
        inspectorateId,
        status: false,
      },
    });
    return resp;
  }
}
