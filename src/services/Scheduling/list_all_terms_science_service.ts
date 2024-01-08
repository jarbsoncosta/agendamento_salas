import { prisma } from "@config/prisma";
import { TermoCiencia } from "@prisma/client";



export class ListAllTermScienceActiveService {
  async execute(): Promise<TermoCiencia> {
  
   const response = await prisma.termoCiencia.findFirst({
      where:{
        active:true
      },     
    })
    return response
  }
}
