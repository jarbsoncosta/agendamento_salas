import { CreateTableService } from "../../../services/Inspectorate/Table/create_table_service";

import { Request, Response } from "express";



export class CreateTableController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateTableService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
