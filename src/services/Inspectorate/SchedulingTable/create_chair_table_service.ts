import { prisma } from "@config/prisma";
import { SchedulingTable } from "@prisma/client";

interface DateProps {
  number: number;
  tableId: string;
  nameProfissional: string;
  chairId: string;
  inspectorateId: string;
  status: boolean;
  cpf:string;
  tituloPrincipal:string
}

export class CreateChairInTableService {
  async execute({
    chairId,
    nameProfissional,
    number,
    tableId,
    inspectorateId,
    cpf,
    tituloPrincipal
  }: DateProps): Promise<SchedulingTable> {
    const resp = await prisma.schedulingTable.create({
      data: {
        nameProfissional,
        number,
        tableId,
        chairId,
        inspectorateId,
        cpf,
        tituloPrincipal
      },
    });
    return resp;
  }
}
