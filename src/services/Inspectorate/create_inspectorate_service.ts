
import { prisma } from '@config/prisma'
import { Inspectorate } from '@prisma/client';

//import AppError from 'src/error/AppError';


interface DataInspectorate{
  name:string;
  description:string
}

export class CreateInspectorateService {
  async execute({name, description}:DataInspectorate): Promise<Inspectorate> {
   
    const inspetoria =  await prisma.inspectorate.create({
      data:{
        name,
        description
      }
    })
    return inspetoria
  }
}