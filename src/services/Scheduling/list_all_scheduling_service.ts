import { prisma } from "@config/prisma";
import { Scheduling } from "@prisma/client";

interface ListSchedulingOptions {
  cpfProfissional: string;
  searchQuery?: string;
  page: number;
}

export class ListAllSchedulingService {
  async execute(options: ListSchedulingOptions): Promise<Scheduling[]> {
    const { cpfProfissional, searchQuery, page } = options;
    const pageSize = 5;
    const pageNumber = parseInt(String(page), 5) || 1;
    const skip = (pageNumber - 1) * pageSize;

    // Lógica de filtro com base na searchQuery (se estiver presente)
    const whereCondition: any = {
      cpfProfissional,
    };

    if (searchQuery) {
     // const searchQueryLower = searchQuery.toLowerCase(); // Convertendo para minúsculas

      whereCondition.OR = [
        {
          title: {
            contains: searchQuery, // Filtra por título que contém a searchQuery
            mode: "insensitive",
          },
        },
        {
          createdAt: {
            contains: searchQuery, // Filtra por data maior ou igual à searchQuery
          },
        },

        // Adicione outras propriedades para filtro conforme necessário
      ];
    }

    // Consulta ao banco de dados com a condição whereCondition
    const schedulings = await prisma.scheduling.findMany({
      where: whereCondition,
      skip: skip >= 0 ? skip : 0,
      take: pageSize,
      include: {
        inspectorate: true,
        room: true,
      },
      orderBy:{
        createdIn:"desc",
      }
      
    });

    return schedulings;
  }
}
