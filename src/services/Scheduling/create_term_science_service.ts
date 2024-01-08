import { prisma } from "@config/prisma";
import { TermoCiencia } from "@prisma/client";

interface SchedulingProps {
  conteudoHtml: string;
  versao: string;
}

export class CreateTermScienceService {
  async execute({
    conteudoHtml,
    versao,
  }: SchedulingProps): Promise<TermoCiencia> {
   const response = await prisma.termoCiencia.create({
     data:{
        conteudoHtml,
        versao
     }
    });

    return response
  }

}
