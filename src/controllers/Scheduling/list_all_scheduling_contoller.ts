

import { ListAllSchedulingService } from "../../services/Scheduling/list_all_scheduling_service";
import { Request, Response } from "express";


export class ListAllSchedulingController{
  async handle (request: Request, response:Response) {
    const service = new ListAllSchedulingService()
    const {id:professionalId} = request.user
    const res = await service.execute(professionalId)

    return response.status(201).json(res)
  }
}
