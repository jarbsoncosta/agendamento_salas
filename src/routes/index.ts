
import { Router } from 'express'
import adminRouter from './admin.routes'
import inspectorateRouter from './inspectorate.routes'
import professionalRouter from './professional.routes'

const routes = Router()


routes.use("/api/inspectorate", inspectorateRouter)
routes.use("/api/professional", professionalRouter)
routes.use("/api/admin", adminRouter)

export default routes
