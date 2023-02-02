
import { prisma } from "@config/prisma";
import { compare } from "bcrypt";
import { Secret, sign } from 'jsonwebtoken';
import AppError from "src/error/AppError";



type AuthenticationParams = {
  password: string;
  email: string;
};

type AuthenticationResponse = {
  professional: {
    id: string;
    name: string;
    email: string;    
  };
  token: string;
};

export class AuthenticateProfessionalService {
  async execute(authenticateParams: AuthenticationParams): Promise<AuthenticationResponse> {
    const { email, password } = authenticateParams;

    const professional = await prisma.professional.findFirst({
      where: {
        email: {
          equals: email,
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
				email: professional.email,
              
			},
			token
		};

		return tokenReturn;

  }
}
