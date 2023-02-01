
import { CreateInspectorateService } from "@models/Inspectorate/create_inspectorate_service";
import { Request, Response } from "express";


export class CreateInspectorateController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateInspectorateService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
