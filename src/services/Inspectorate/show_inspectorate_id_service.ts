
import { prisma } from '@config/prisma'
import { Inspectorate } from '@prisma/client';

//import AppError from 'src/error/AppError';

export class ShowInspectorateIdService {
  async execute(id: string): Promise<Inspectorate> {
    const inspectorate = await prisma.inspectorate.findFirst({
      where: {
        id
      },
      include: {
        rooms: {
          include:{
            hours:true
          }
        },
        datasRestritas:true

      }
    })
    return inspectorate
  }
}