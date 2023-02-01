
import { ShowProfessionalIdService } from "@models/Professional/show_professional_id_service";
import { Request, Response } from "express";


export class ShowProfessionalController {
  async handle(request: Request, response: Response) {
    const { email } = request.body
    const service = new ShowProfessionalIdService()

    const res = await service.execute(email)

    return response.status(201).json(res)
  }
}
