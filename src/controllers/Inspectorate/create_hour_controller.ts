import { Request, Response } from "express";
import { CreateHourService } from "../../services/Inspectorate/create_hour_service";


export class CreateHourController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateHourService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
