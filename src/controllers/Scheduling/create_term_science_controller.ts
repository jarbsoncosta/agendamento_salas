import { Request, Response } from "express";
import { CreateTermScienceService } from "../../services/Scheduling/create_term_science_service";


export class CreateTermScienceController {
  async handle(request: Request, response: Response) {
    const dataRequest = request.body
   
    const service = new CreateTermScienceService()
    const res = await service.execute(dataRequest)
    return response.status(201).json(res)
  }
}
