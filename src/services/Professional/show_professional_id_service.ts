import db from '../../config/db'

import AppError from '../../error/AppError';

export class ShowProfessionalIdService {
  async execute(cpf: string) {
    const res = await db.query(`
        SELECT 
        distinct 
        pf.nome, 
        pf.cpf,     
        t.titulo_profissional as titulo_principal   
    FROM
    relatorios.tb_profissional_report r
    LEFT JOIN tb_profissional_titulo pt ON r.pessoa_id = pt.pessoa_id
    LEFT JOIN tb_titulo t ON t.id = pt.titulo_id
    LEFT JOIN tb_tiporegistro tr ON tr.codigo = r.tipo_registro	
    LEFT JOIN tb_modalidadeatribuicao ma ON ma.id = t.modalidaatribuicao_id
    LEFT JOIN tb_profissional pf ON pf.pessoa_id = r.pessoa_id
    LEFT JOIN tb_filial f ON f.descricao = r.filial
    WHERE pf.cpf = $1`, [cpf], async function (error, results) {
      if (error) {
        throw error
      }   
    })
    if (!res.rows[0]) {
      throw new AppError("Profissional não encontrado !")
    }
    return res.rows[0]
  };

}

