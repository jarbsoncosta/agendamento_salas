

import { Request, Response } from "express";
import { ListTablesService } from "../../../services/Inspectorate/Table/list_tables_service";


export class ListTablesController{
  async handle (request: Request, response:Response) {
    const {inspectorateId} = request.params
    const service = new ListTablesService()

    const res = await service.execute(inspectorateId)

    return response.status(201).json(res)
  }
}
