import { CreateReservaMesaIndividualService } from "../../../services/Inspectorate/MesaIndividual/create_reserva_mesa_individual_service";
import { Request, Response } from "express";



export class CreateReservaMesaIndividualController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateReservaMesaIndividualService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
