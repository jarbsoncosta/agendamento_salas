
import { Request, Response } from "express";
import { ListAllSchedulingAdminService } from "@models/Scheduling/list_all_scheduling_admin_service";


export class ListAllSchedulingAdminController{
  async handle (request: Request, response:Response) {
    const service = new ListAllSchedulingAdminService()
     const res = await service.execute()

    return response.status(201).json(res)
  }
}
