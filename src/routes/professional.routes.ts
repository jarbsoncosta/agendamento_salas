
import { AuthenticateProfessionalController } from '@controllers/Professional/authenticate_controller'
import { CreateProfessionalController } from '@controllers/Professional/create_professional_controller'
import { ShowProfessionalController } from '@controllers/Professional/show_professional_id_controller'
import { Router } from 'express'

//import { userAuthenticate } from 'src/middlewares/userAuthenticate'

const professionalRouter = Router()
professionalRouter.post('/session', new AuthenticateProfessionalController().handle)
professionalRouter.post("/", new CreateProfessionalController().handle)
professionalRouter.get("/:cpf", new ShowProfessionalController().handle)


export default professionalRouter