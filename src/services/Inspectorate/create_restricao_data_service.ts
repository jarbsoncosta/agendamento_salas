import { prisma } from "@config/prisma";
import { DatasRestritas } from "@prisma/client";

//Criar data para não agendar sala de reunião 
export class CreateDataRestricaoService {
  async execute(
    inspectorateId:string,
    data:string,
  ): Promise<DatasRestritas> {
   const response = await prisma.datasRestritas.create({
     data:{
        data,
        inspectorateId
     }
    });

    return response
  }

}
