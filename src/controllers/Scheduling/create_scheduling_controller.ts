import { CreateSchedulingService } from "@models/Scheduling/create_scheduling_service";
import { Request, Response } from "express";


export class CreateSchedulingController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateSchedulingService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
