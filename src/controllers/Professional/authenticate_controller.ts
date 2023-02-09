

import { AuthenticateProfessionalService } from '../../services/Professional/authenticate_service'
import { Request, Response } from 'express'

export class AuthenticateProfessionalController {
  async handle (req: Request, res: Response): Promise<Response> {
    const { cpf, password } = req.body
    const service = new AuthenticateProfessionalService()

    const response = await service.execute({ cpf, password })

    return res.status(200).json(response)
  }
}