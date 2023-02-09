
import { ListInspectoratesService } from "../../services/Inspectorate/list_inspectorates_service";
import { Request, Response } from "express";


export class ListInspectorateController{
  async handle (request: Request, response:Response) {

    const service = new ListInspectoratesService()

    const res = await service.execute()

    return response.status(201).json(res)
  }
}
