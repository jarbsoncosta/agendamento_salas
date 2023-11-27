import { Request, Response } from "express";
import { CancelSchedulingProfessionalIdService } from "../../services/Scheduling/cancel_scheduling_professional_id";


export class CanceLSchedulingProfessionalIdController {
  async handle(request: Request, response: Response) {
    const dataRequest = request.body
    const { id:professionalId } = request.user
    const { id } = request.params

    const service = new CancelSchedulingProfessionalIdService()
    const res = await service.execute({ id, professionalId, ...dataRequest })
    return response.status(201).json(res)
  }
}
