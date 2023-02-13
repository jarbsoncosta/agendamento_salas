
import { prisma } from '@config/prisma'
import {Professional } from '@prisma/client';
import AppError from '../../error/AppError';


export class ShowProfileProfessionalService {
  async execute(id:string): Promise<Professional | undefined> {
    try {
      const profile = await prisma.professional.findFirst({where:{id}});
      if (!profile) {
        throw new AppError('Perfil não encontrado');
      }
      return profile;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }
}