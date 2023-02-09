
import { prisma } from '@config/prisma'
import { Hour } from '@prisma/client';

//import AppError from 'src/error/AppError';

export class ListHoursService {
  async execute(): Promise<Hour[]> {
    const hours = await prisma.hour.findMany()
    return hours
  }
}