
import { prisma } from '@config/prisma'
import { Inspectorate } from '@prisma/client';

//import AppError from 'src/error/AppError';

export class ListInspectoratesService {
  async execute(): Promise<Inspectorate[]> {
    const inspectorates = await prisma.inspectorate.findMany()
    return inspectorates
  }
}