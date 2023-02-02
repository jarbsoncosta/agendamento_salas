
import { CreateAdminController } from '@controllers/Administrator/create_admin_controller'
import { Router } from 'express'

const adminRouter = Router()
adminRouter.post("/", new CreateAdminController().handle)


export default adminRouter