import db from '../../config/db'

import AppError from 'src/error/AppError';

export class ShowProfessionalIdService {
  async execute(cpf: string) {
    const response = await db.query('SELECT nome, cpf FROM tb_profissional ' +
      'WHERE cpf = $1', [cpf], (error, results) => {
        if (error) {
          throw error
        }
      })
    if (!response.rows[0]) {
      throw new AppError("Profissional não encontrado")
    }
    return response.rows
}
}