
import { ShowProfessionalController } from '../controllers/Professional/show_professional_id_controller'
import { Router } from 'express'

const professionalRouter = Router()
professionalRouter.get("/:cpf", new ShowProfessionalController().handle)



export default professionalRouter