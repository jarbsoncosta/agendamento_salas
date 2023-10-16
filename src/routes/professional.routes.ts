
import { AuthenticateProfessionalController } from '../controllers/Professional/authenticate_controller'
import { CreateProfessionalController } from '../controllers/Professional/create_professional_controller'
import { ShowProfessionalController } from '../controllers/Professional/show_professional_id_controller'
import { Router } from 'express'
import { ForgotPasswordController } from '../controllers/Professional/forgot_password_controller'
import { ShowProfileProfessionalController } from '@controllers/Professional/show_profile_professional_controller'
import { professionalAuthenticate } from 'src/middlewares/professionalAuthenticate'

//import { userAuthenticate } from 'src/middlewares/userAuthenticate'

const professionalRouter = Router()
professionalRouter.get("/", professionalAuthenticate, new ShowProfileProfessionalController().handle)
professionalRouter.post('/session', new AuthenticateProfessionalController().handle)
professionalRouter.post('/forgotPassword', new ForgotPasswordController().handle)
professionalRouter.post("/", new CreateProfessionalController().handle)
professionalRouter.get("/:cpf", new ShowProfessionalController().handle)



export default professionalRouter