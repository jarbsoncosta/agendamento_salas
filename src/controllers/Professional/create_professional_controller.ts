import { CreateProfessionalService } from "../../services/Professional/create_professional_service";
import { Request, Response } from "express";


export class CreateProfessionalController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateProfessionalService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
