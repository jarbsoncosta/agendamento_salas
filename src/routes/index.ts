
import { Router } from 'express'
import adminRouter from './admin.routes'
import hoursRouter from './hours.routes'
import inspectorateRouter from './inspectorate.routes'
import professionalRouter from './professional.routes'
import schedulingRouter from './scheduling.routes'

const routes = Router()

routes.use("/api/inspectorate", inspectorateRouter)
routes.use("/api/professional", professionalRouter)
routes.use("/api/scheduling", schedulingRouter)
routes.use("/api/admin", adminRouter)
routes.use("/api/hours", hoursRouter)

export default routes
