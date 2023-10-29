
import { Request, Response } from "express";
import { ListAllSchedulingAdminService } from "@models/Scheduling/list_all_scheduling_admin_service";


export class ListAllSchedulingAdminController{
  async handle(request: Request, response: Response) {
    
    const { options, inspectorateId, searchQuery,page } = request.query;

    const service = new ListAllSchedulingAdminService();

    let filters = { inspectorateId,searchQuery,page };

    // Verifica se options está presente e parseia para objeto JSON
    if (options) {
      filters = JSON.parse(options as string);
    }

    const res = await service.execute(filters);

    return response.status(200).json(res);
  } 
}
