import { prisma } from "@config/prisma";
import { Baia } from "@prisma/client";

//Listar todas as baias, com suas reservas

export class ListBaiasService {
  async execute(inspectorateId: string): Promise<Baia[]> {
    const result = await prisma.baia.findMany({
      orderBy: {
        number: "asc",
      },
      where: {
        inspectorateId,
      },
      include: {
        Inspectorate: {
          select: {
            name: true,
          },
        },
      },
    });

    // Divida o array em duas partes
    const primeiraParte = result.slice(7, 14);
    const segundaParte = result.slice(0, 7);

    // Inverta a primeira parte
    const primeiraParteInvertida = primeiraParte.reverse();

    // Junte as duas partes
    const arrayReorganizado = [...primeiraParteInvertida, ...segundaParte];
    return arrayReorganizado;
  }
}
