
import { Request, Response } from "express";
import { ForgotPasswordService } from "../../services/Professional/forgot_password_service";


export class ForgotPasswordController {
  async handle(request: Request, response: Response) {
    const { email } = request.body
    const service = new ForgotPasswordService()
    const res = await service.execute(email)

    return response.status(201).json(res)
  }
}
