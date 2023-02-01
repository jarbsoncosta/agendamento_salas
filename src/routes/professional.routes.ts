
import { CreateProfessionalController } from '@controllers/Professional/create_professional_controller'
import { ShowProfessionalController } from '@controllers/Professional/show_professional_id_controller'
import { Router } from 'express'

//import { userAuthenticate } from 'src/middlewares/userAuthenticate'

const professionalRouter = Router()
//professionalRouter.post('/session', new AuthenticateController().handle)
professionalRouter.post("/", new CreateProfessionalController().handle)
professionalRouter.get("/show", new ShowProfessionalController().handle)


export default professionalRouter