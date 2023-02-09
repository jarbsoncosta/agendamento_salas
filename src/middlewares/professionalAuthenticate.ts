import { NextFunction, Request, Response } from "express";
import { Secret, verify } from "jsonwebtoken";
import AppError from "../error/AppError";


interface IPayload {
	sub: string;
}

export async function professionalAuthenticate(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new AppError('Token missing', 401);
	}

	// [0] = Bearer
	// [1] = token
	const [, token] = authHeader.split(' ');

	try {
		// verifica se existe um token
		const { sub: userId } = verify(
			token,
			process.env.JWT_SECRET as Secret // recebe o token 
		) as IPayload;

		// recuprando usúario authenticado
		request.user = {
			id: userId
		};

		next();
	} catch {
		throw new AppError('Invalid token', 401);
	}
}