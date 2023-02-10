import { prisma } from '@config/prisma'
import { Professional } from '@prisma/client'
import AppError from '../../error/AppError';
import { hash } from 'bcrypt'

interface ProfessionalProps{
  name:string;
  cpf:string;
  email:string
  password:string;
  professionalTitle:string;
  confirmPassword:string
}
export class CreateProfessionalService {
  async execute({ name, cpf,email, password,professionalTitle, confirmPassword }: ProfessionalProps): Promise<Professional> {

    const userName = name.toLocaleLowerCase();
    const capitalFirstLetter = userName.split(" ");
    
    for (let i = 0; i < capitalFirstLetter.length; i++) {
        capitalFirstLetter[i] = capitalFirstLetter[i][0].toUpperCase() + capitalFirstLetter[i].substr(1);
    }
   

    const professionalExists = await prisma.professional.findFirst({
      where: { cpf }
    })
    if (professionalExists) {
      throw new AppError("Cpf já cadastrado no sistema !")
    }
    if (confirmPassword !== password) {
      throw new AppError('Confirmação de senha não confere !')
    }
    
    const hashedPassword = await hash(password, 8)
    const professional = await prisma.professional.create({
      data: {
        name:capitalFirstLetter.join(" "),
        cpf,  
        email,
        professionalTitle,
        password: hashedPassword,        
      }
    })
    return professional
  }
}