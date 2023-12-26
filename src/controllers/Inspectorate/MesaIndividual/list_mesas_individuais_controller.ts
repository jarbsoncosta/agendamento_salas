

import { Request, Response } from "express";
import { ListMesasIndividuaisService } from "../../../services/Inspectorate/MesaIndividual/list_mesas_individual_service";

export class ListMesasIndividuaisController{
  async handle (request: Request, response:Response) {
    const {inspectorateId} = request.params
    const service = new ListMesasIndividuaisService()

    const res = await service.execute(inspectorateId)

    return response.status(201).json(res)
  }
}
