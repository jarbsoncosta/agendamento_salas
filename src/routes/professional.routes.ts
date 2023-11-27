
import { ShowProfessionalController } from '../controllers/Professional/show_professional_id_controller'
import { Router } from 'express'
// import { professionalAuthenticate } from 'src/middlewares/professionalAuthenticate'

//import { userAuthenticate } from 'src/middlewares/userAuthenticate'

const professionalRouter = Router()
professionalRouter.get("/:cpf", new ShowProfessionalController().handle)



export default professionalRouter