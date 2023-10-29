import { ListAllSchedulingService } from "@models/Scheduling/list_all_scheduling_service";
import { Request, Response } from "express";

export class ListAllSchedulingController {
  async handle(request: Request, response: Response) {
    
      const { options, cpfProfissional, searchQuery,page } = request.query;
  
      const service = new ListAllSchedulingService();

      let filters = { cpfProfissional,searchQuery,page };

      // Verifica se options está presente e parseia para objeto JSON
      if (options) {
        filters = JSON.parse(options as string);
      }

      const res = await service.execute(filters);

      return response.status(200).json(res);
    } 
  
}
