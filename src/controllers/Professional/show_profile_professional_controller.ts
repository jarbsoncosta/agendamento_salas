import { Request, Response } from "express";
import { ShowProfileProfessionalService } from "@models/Professional/show_profile_professional_service";


export class ShowProfileProfessionalController {
  async handle(request: Request, response: Response) {
    const { id } = request.user
    const service = new ShowProfileProfessionalService()

    const res = await service.execute(id)

    return response.status(201).json(res)
  }
}
