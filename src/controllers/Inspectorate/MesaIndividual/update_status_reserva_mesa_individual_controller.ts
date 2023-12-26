import { UpdataStatusReservaMesaIndividualService } from "../../../services/Inspectorate/MesaIndividual/update_status_reserva_mesa_individual_service";
import { Request, Response } from "express";



export class UpdataStatusReservaMesaIndividualController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new UpdataStatusReservaMesaIndividualService();

    const res = await service.execute(id);

    return response.status(201).json(res);
  }
}
