

import { Request, Response } from "express";
import { ListBaiasService } from "../../../services/Inspectorate/Baia/list_baias_service";


export class ListBaiasController{
  async handle (request: Request, response:Response) {
    const {inspectorateId} = request.params
    const service = new ListBaiasService()

    const res = await service.execute(inspectorateId)

    return response.status(201).json(res)
  }
}
