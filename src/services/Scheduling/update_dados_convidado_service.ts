import { prisma } from "@config/prisma";
import { Convidado } from "@prisma/client";
import AppError from "../../error/AppError";

interface PropsConvidado {
  convidadoId: string;
  cpf?: string;
  nome?: string;
  status?: boolean;
}

//Serviço para atualizar o status da reserva da mesa individual para true
export class UpdataDadosConvidadoService {
  async execute({ convidadoId, cpf, nome, status }: PropsConvidado): Promise<Convidado> {
    const convidadoExiste = await prisma.convidado.findFirst({
      where: {
        id:convidadoId,
      },
    });
    if (!convidadoExiste) {
      throw new AppError("Convidado não encontrado!");
    }

    const resp = await prisma.convidado.update({
      where: {
        id: convidadoExiste.id,
      },
      data: {
        cpf,
        nome,
        status,
      },
    });
    return resp;
  }
}
