import { Request, Response } from "express";
import { UpdateDataProfessionalService } from "@models/Professional/update_date_professional_service";
import { UpdatePasswordProfessionalService } from "@models/Professional/update_password_professional_service";


export class UpdatePasswordProfessionalController{
  async handle (request: Request, response:Response) {
    const {id}= request.user
    const dataRequest = request.body

    const service = new UpdatePasswordProfessionalService()

    const res = await service.execute({id, ...dataRequest})

    return response.status(201).json(res)
  }
}
