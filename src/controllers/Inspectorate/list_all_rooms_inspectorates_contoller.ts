
import { ListAllRoomsInspectoratesService } from "../../services/Inspectorate/list_all_rooms_inspectorates_service";
import { Request, Response } from "express";


export class ListAllRoomsInspectoratesController{
  async handle (request: Request, response:Response) {
    const {inspetoriaId} = request.params
    const service = new ListAllRoomsInspectoratesService()

    const res = await service.execute(inspetoriaId)

    return response.status(201).json(res)
  }
}
