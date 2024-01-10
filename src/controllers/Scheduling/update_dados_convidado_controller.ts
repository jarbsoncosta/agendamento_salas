import { UpdataDadosConvidadoService } from "../../services/Scheduling/update_dados_convidado_service";
import { Request, Response } from "express";



export class UpdateDadosConvidadoController {
  async handle(request: Request, response: Response) {
    const { convidadoId } = request.params;
    const {cpf, nome, status} = request.body

    const service = new UpdataDadosConvidadoService();

    const res = await service.execute({convidadoId,cpf, nome, status});

    return response.status(201).json(res);
  }
}
