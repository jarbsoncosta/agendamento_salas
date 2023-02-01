import db from '../../config/db'

//import AppError from 'src/error/AppError';

export class ShowProfessionalIdService {
  async execute(email: string) {
  const response = await db.query('SELECT name FROM professional WHERE email = $1', [email],  (error, results)  => {
      if (error) {
        throw error
      }          
    })
    return response.rows
  }

}