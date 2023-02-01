
import { Router } from 'express'
import inspectorateRouter from './inspectorate.routes'
import professionalRouter from './professional.routes'

const routes = Router()


routes.use("/api/inspectorate", inspectorateRouter)
routes.use("/api/professional", professionalRouter)

export default routes
