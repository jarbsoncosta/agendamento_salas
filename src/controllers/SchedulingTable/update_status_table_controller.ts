import { UpdataStatusSchedulingTableService } from "../../services/Inspectorate/SchedulingTable/update_status_service";
import { Request, Response } from "express";



export class UpdataStatusSchedulingTableController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new UpdataStatusSchedulingTableService();

    const res = await service.execute(id);

    return response.status(201).json(res);
  }
}
