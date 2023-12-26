import { CreateReservaBaiaService } from "../../../services/Inspectorate/Baia/create_reserva_baia_service";
import { Request, Response } from "express";



export class CreateReservaBaiaController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateReservaBaiaService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
