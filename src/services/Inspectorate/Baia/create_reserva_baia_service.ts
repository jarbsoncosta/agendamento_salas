import { prisma } from "@config/prisma";
import { SchedulingBaia } from "@prisma/client";

interface DataProps {
  numberBaia: number;
  nameProfissional: string;
  inspectorateId: string;
  cpf:string;
  tituloPrincipal:string

}

export class CreateReservaBaiaService {
  async execute({
    nameProfissional,
    numberBaia,
    inspectorateId,
    cpf,
    tituloPrincipal
  }: DataProps): Promise<SchedulingBaia> {
    const resp = await prisma.schedulingBaia.create({
      data: {
        nameProfissional,
        numberBaia,
        inspectorateId,
        cpf,
        tituloPrincipal
      },
    });
    return resp;
  }
}
