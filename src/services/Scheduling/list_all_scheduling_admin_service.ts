import { prisma } from "@config/prisma";
import { Scheduling } from "@prisma/client";
import AppError from "src/error/AppError";

interface ListSchedulingOptions {
  inspectorateId: string;
  searchQuery?: string;
  page: number;
}


export class ListAllSchedulingAdminService {
  async execute(options:ListSchedulingOptions): Promise<Scheduling[]> {
    const { inspectorateId, searchQuery, page } = options;
    const pageSize = 5;
    const pageNumber = parseInt(String(page), 5) || 1;
    const skip = (pageNumber - 1) * pageSize;

    // Lógica de filtro com base na searchQuery (se estiver presente)
    const whereCondition: any = {
      inspectorateId,
    };

    
    if (searchQuery) {
      whereCondition.OR = [
        {
          nameProfissional: {
            contains: searchQuery, // Filtra por nome do profissional que contém a searchQuery
          },
        },
        {
          title: {
            contains: searchQuery, // Filtra por título que contém a searchQuery
          },
        },
        {
          emailProfissional: {
            contains: searchQuery, // Filtra por email que contém a searchQuery
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

    const inspectorateExists = await prisma.inspectorate.findFirst({where:{
      id:inspectorateId
    }})

    if(!inspectorateExists){
      throw new AppError("Inspetoria não encontrada")
    }
    const shedulings = await prisma.scheduling.findMany({
      where:whereCondition,
      skip: skip >= 0 ? skip : 0,
      take: pageSize,
      include: {
        inspectorate: true,
        room: true,
      },
    });


    const nameInspetorate = await prisma.inspectorate.findFirst({where:{
      id: inspectorateId
    }})

    const data = {
      inspetorate: nameInspetorate.name,
      shedulings:shedulings
    }

    return data;
  }
}
