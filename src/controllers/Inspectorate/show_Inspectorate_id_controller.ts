
import { ShowInspectorateIdService } from "../../services/Inspectorate/show_inspectorate_id_service";
import { Request, Response } from "express";


export class ShowInspectorateController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const service = new ShowInspectorateIdService()

    const res = await service.execute(id)

    return response.status(201).json(res)
  }
}
