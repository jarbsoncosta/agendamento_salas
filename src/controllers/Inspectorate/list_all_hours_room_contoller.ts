import { Request, Response } from "express";
import { ListAllHoursRoomIdService } from "../../services/Inspectorate/list_all_hous_roomId_service";


export class ListAllHoursRoomsIdController{
  async handle (request: Request, response:Response) {
    const {roomId} = request.params
    const service = new ListAllHoursRoomIdService()

    const res = await service.execute(roomId)

    return response.status(201).json(res)
  }
}
