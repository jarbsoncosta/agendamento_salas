

import { AuthenticateProfessionalService } from '@models/Professional/authenticate_service'
import { Request, Response } from 'express'

export class AuthenticateProfessionalController {
  async handle (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const service = new AuthenticateProfessionalService()

    const response = await service.execute({ email, password })

    return res.status(200).json(response)
  }
}