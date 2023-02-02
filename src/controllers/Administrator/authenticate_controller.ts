import { AuthenticateAdminService } from '@models/Administrator/authenticate_service'

import { Request, Response } from 'express'

export class AuthenticateAdminController {
  async handle (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const service = new AuthenticateAdminService()

    const response = await service.execute({ email, password })

    return res.status(200).json(response)
  }
}