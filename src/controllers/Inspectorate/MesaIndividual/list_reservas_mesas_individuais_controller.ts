

import { Request, Response } from "express";

import { ListReservasMesasIndividuaisService } from "../../../services/Inspectorate/MesaIndividual/list_reservas_mesas_individuais_service";


export class ListReservasMesasIndividuaisController{
  async handle (request: Request, response:Response) {
    const {inspectorateId} = request.params
    const service = new ListReservasMesasIndividuaisService()

    const res = await service.execute(inspectorateId)

    return response.status(201).json(res)
  }
}
