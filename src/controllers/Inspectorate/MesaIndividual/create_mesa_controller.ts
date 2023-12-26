import { CreateMesaIndividualService } from "../../../services/Inspectorate/MesaIndividual/create_mesa_service";

import { Request, Response } from "express";



export class CriartMesasIndividuaisController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateMesaIndividualService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
