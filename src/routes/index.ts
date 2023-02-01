
import { Router } from 'express'
import inspectorateRouter from './inspectorate.routes'

const routes = Router()


routes.use("/api/inspectorate", inspectorateRouter)

export default routes
