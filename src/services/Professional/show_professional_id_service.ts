import db from '../../config/db'

//import AppError from 'src/error/AppError';

export class ShowProfessionalIdService {
  async execute(cpf: string) {
    db.query('SELECT nome FROM tb_profissional WHERE cpf = $1', [cpf], (error, results) => {
      if (error) {
        throw error
      }
      return results.rows[0]
    })
    
  }
}