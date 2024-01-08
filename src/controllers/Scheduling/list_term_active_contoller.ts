import { ListAllTermScienceActiveService } from "../../services/Scheduling/list_all_terms_science_service";
import { Request, Response } from "express";

export class  ListAllTermScienceActiveController {
  async handle(request: Request, response: Response) {
        
      const service = new ListAllTermScienceActiveService(); 
      const res = await service.execute();

      return response.status(200).json(res);
    } 
  
}
