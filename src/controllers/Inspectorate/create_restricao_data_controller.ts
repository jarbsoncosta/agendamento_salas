import { Request, Response } from "express";
import { CreateDataRestricaoService } from "../../services/Inspectorate/create_restricao_data_service";


export class CreateDataRestricaoController {
  async handle(request: Request, response: Response) {
    const {inspectorateId,data} = request.body
   
    const service = new CreateDataRestricaoService()
    const res = await service.execute(inspectorateId,data)
    return response.status(201).json(res)
  }
}
