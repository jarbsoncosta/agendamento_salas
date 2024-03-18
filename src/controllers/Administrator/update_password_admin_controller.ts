import { UpdatePasswordAdminService } from "../../services/Administrator/update_password_admin_service";
import { Request, Response } from "express";


export class UpdatePasswordAdminController{
  async handle (request: Request, response:Response) {
    const {admin_id} = request.params
    const {password} = request.body

    const service = new UpdatePasswordAdminService()

    const res = await service.execute({password, admin_id})

    return response.status(201).json(res)
  }
}
