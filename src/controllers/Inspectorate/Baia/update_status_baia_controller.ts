import { UpdataStatusReservaBaiaService } from "../../../services/Inspectorate/Baia/update_status_baia_service";
import { Request, Response } from "express";



export class UpdataStatusReservaBaiaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new UpdataStatusReservaBaiaService();

    const res = await service.execute(id);

    return response.status(201).json(res);
  }
}
