import { CreateChairInTableService } from "../../services/Inspectorate/SchedulingTable/create_chair_table_service";
import { Request, Response } from "express";



export class CreateChairInTableController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateChairInTableService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
