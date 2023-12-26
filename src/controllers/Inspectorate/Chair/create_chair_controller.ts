

import { CreateChairService } from "../../../services/Inspectorate/Chair/create_chair_service";
import { Request, Response } from "express";



export class CreateChairController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateChairService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
