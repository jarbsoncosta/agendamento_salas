import { Request, Response } from "express";
import { UpdateSchedulingService } from "../../services/Scheduling/update_scheduling_service";


export class UpdateSchedulingController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body
    const {id}=request.params

    const service = new UpdateSchedulingService()

    const res = await service.execute({id,...dataRequest})

    return response.status(201).json(res)
  }
}
