import { Request, Response } from "express";
import { UpdateDataProfessionalService } from "@models/Professional/update_date_professional_service";


export class UpdateDataProfessionalController{
  async handle (request: Request, response:Response) {
    const {id}= request.user
    const dataRequest = request.body

    const service = new UpdateDataProfessionalService()

    const res = await service.execute({id, ...dataRequest})

    return response.status(201).json(res)
  }
}
