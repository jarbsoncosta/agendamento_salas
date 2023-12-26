import { prisma } from "@config/prisma";
import { SchedulingTable } from "@prisma/client";

interface DateProps {
  number: number;
  tableId: string;
  nameProfissional: string;
  chairId: string;
  inspectorateId: string;
  status: boolean;
}

export class CreateChairInTableService {
  async execute({
    chairId,
    nameProfissional,
    number,
    tableId,
    inspectorateId,
  }: DateProps): Promise<SchedulingTable> {
    const resp = await prisma.schedulingTable.create({
      data: {
        nameProfissional,
        number,
        tableId,
        chairId,
        inspectorateId,
      },
    });
    return resp;
  }
}
