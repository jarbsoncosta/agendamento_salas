import { CreateSchedulingService } from "../../services/Scheduling/create_scheduling_service";
import { Request, Response } from "express";


export class CreateSchedulingController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body
    const {id:professionalId }=request.user

    const service = new CreateSchedulingService()

    const res = await service.execute({professionalId,...dataRequest})

    return response.status(201).json(res)
  }
}
