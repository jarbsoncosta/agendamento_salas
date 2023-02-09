import { CreateAdminService } from "../../services/Administrator/create_admin_service";
import { Request, Response } from "express";


export class CreateAdminController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateAdminService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
