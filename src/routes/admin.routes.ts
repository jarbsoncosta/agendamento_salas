
import { AuthenticateAdminController } from '../controllers/Administrator/authenticate_controller'
import { CreateAdminController } from '../controllers/Administrator/create_admin_controller'
import { Router } from 'express'

const adminRouter = Router()
adminRouter.post("/", new CreateAdminController().handle)
adminRouter.post('/session', new AuthenticateAdminController().handle)


export default adminRouter