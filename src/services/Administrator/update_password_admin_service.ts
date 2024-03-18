import { prisma } from '@config/prisma'
import { Admin } from '@prisma/client'
import AppError from '../../error/AppError';
import { hash } from 'bcrypt'

interface AdminProps {
  password: string;
  admin_id: string

}
export class UpdatePasswordAdminService {
  async execute({ admin_id, password }: AdminProps): Promise<Admin> {
    const adminExists = await prisma.admin.findFirst({
      where: { id:admin_id }
    })
    const hashedPassword = await hash(password, 8)

    const admin = await prisma.admin.update({
      where: {
        id: adminExists.id
      },
      data: {
        password: hashedPassword,
      }
    })
    return admin
  }
}