

import { CreateBaiaService } from "../../../services/Inspectorate/Baia/create_baia_service";
import { Request, Response } from "express";



export class CreateBaiaController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateBaiaService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
