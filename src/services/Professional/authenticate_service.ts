
import { prisma } from "@config/prisma";
import { compare } from "bcrypt";
import { Secret, sign } from 'jsonwebtoken';
import AppError from "src/error/AppError";



type AuthenticationParams = {
  password: string;
  cpf: string;
};

type AuthenticationResponse = {
  professional: {
    id: string;
    name: string;
      
  };
  token: string;
};

export class AuthenticateProfessionalService {
  async execute(authenticateParams: AuthenticationParams): Promise<AuthenticationResponse> {
    const { cpf, password } = authenticateParams;

    const professional = await prisma.professional.findFirst({
      where: {
        cpf: {
          equals: cpf,
          mode: 'insensitive'
        }
      }
    })

    if (!professional) {
      throw new AppError("Não autorizado", 401);
    }

    const passwordMatch = await compare(password, professional.password);
    if (!passwordMatch) {
      throw new AppError("Não autorizado", 401);
    }

    const token = sign({}, process.env.JWT_SECRET as Secret, {
			subject: professional.id,
			expiresIn: process.env.JWT_EXPIRES_IN
		});

    const tokenReturn: AuthenticationResponse = {
			professional: {
				id: professional.id,
				name: professional.name,
				              
			},
			token
		};

		return tokenReturn;

  }
}
