

import { Request, Response } from "express";
import { ListReservasService } from "../../../services/Inspectorate/Baia/list_reservas_service";


export class ListReservasController{
  async handle (request: Request, response:Response) {

    const {inspectorateId} = request.params
 
    const service = new ListReservasService()

    const res = await service.execute(inspectorateId)

    return response.status(201).json(res)
  }
}
