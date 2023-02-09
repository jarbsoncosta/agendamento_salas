

import { Request, Response } from "express";
import { ListHoursService } from "../../services/Inspectorate/list_hours_service";


export class ListHoursController{
  async handle (request: Request, response:Response) {

    const service = new ListHoursService()

    const res = await service.execute()

    return response.status(201).json(res)
  }
}
