import { prisma } from "@config/prisma";


interface Dados{
  dataFormatada: string;
  descricao: string;
  inspetoriaId: string;
}
//Criar data para não agendar sala de reunião
export class CreateDataRestricaoService {
  async execute(array: Dados[]): Promise<any> {
   
    for (const event of array  ) {
      try {
        await prisma.datasRestritas.create({
          data: {
            data: event.dataFormatada,
            descricao: event.descricao,
            inspectorateId:event.inspetoriaId
          },
        });
      
     } catch (erro) {
       console.error(`Erro ao salvar os convidados: ${erro.message}`);
     }
   }

    return
    }
  }
