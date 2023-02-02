
import { prisma } from "@config/prisma";
import { compare } from "bcrypt";
import { Secret, sign } from 'jsonwebtoken';
import AppError from "src/error/AppError";



type AuthenticationParams = {
  password: string;
  email: string;
};

type AuthenticationResponse = {
  userAdmin: {
    id: string;
    name: string;
    email: string;    
  };
  token: string;
};

export class AuthenticateAdminService {
  async execute(authenticateParams: AuthenticationParams): Promise<AuthenticationResponse> {
    const { email, password } = authenticateParams;

    const admin = await prisma.admin.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive'
        }
      }
    })

    if (!admin) {
      throw new AppError("Não autorizado", 401);
    }

    const passwordMatch = await compare(password, admin.password);
    if (!passwordMatch) {
      throw new AppError("Não autorizado", 401);
    }

    const token = sign({}, process.env.JWT_SECRET as Secret, {
			subject: admin.id,
			expiresIn: process.env.JWT_EXPIRES_IN
		});

    const tokenReturn: AuthenticationResponse = {
			userAdmin: {
				id: admin.id,
				name: admin.name,
				email: admin.email,
              
			},
			token
		};

		return tokenReturn;

  }
}
