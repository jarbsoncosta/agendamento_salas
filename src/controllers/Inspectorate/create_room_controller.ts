
import { CreateRoomService } from "@models/Inspectorate/create_room_service";
import { Request, Response } from "express";


export class CreateRoomController{
  async handle (request: Request, response:Response) {
    const dataRequest = request.body

    const service = new CreateRoomService()

    const res = await service.execute(dataRequest)

    return response.status(201).json(res)
  }
}
