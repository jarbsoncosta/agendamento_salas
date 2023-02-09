
import { prisma } from "@config/prisma";
import { compare } from "bcrypt";
import { Secret, sign } from 'jsonwebtoken';
import AppError from "../../error/AppError";



type AuthenticationParams = {
  password: string;
  cpf: string;
};

type AuthenticationResponse = {
  user: {
    id: string;
    name: string;
    cpf:string
      
  };
  token: string;
};

export class AuthenticateProfessionalService {
  async execute(authenticateParams: AuthenticationParams): Promise<AuthenticationResponse> {
    const { cpf, password } = authenticateParams;

    const user = await prisma.professional.findFirst({
      where: {
        cpf: {
          equals: cpf,
          mode: 'insensitive'
        }
      }
    })

    if (!user) {
      throw new AppError("Não autorizado", 401);
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("Não autorizado", 401);
    }

    const token = sign({}, process.env.JWT_SECRET as Secret, {
			subject: user.id,
			expiresIn: process.env.JWT_EXPIRES_IN
		});

    const tokenReturn: AuthenticationResponse = {
			user: {
				id: user.id,
				name: user.name,
        cpf:user.cpf
				              
			},
			token
		};

		return tokenReturn;

  }
}
