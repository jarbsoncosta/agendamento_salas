
import { Router } from 'express'
import adminRouter from './admin.routes'
import hoursRouter from './hours.routes'
import inspectorateRouter from './inspectorate.routes'
import professionalRouter from './professional.routes'
import schedulingRouter from './scheduling.routes'
import autenticarProfissionalSitac from '../services/Professional/get_profissional_autenticado'
import tableRouter from './table.routes'
import baiaRouter from './bais.routes'
import mesaIndividualRouter from './mesas_individuais.routes'

const routes = Router()

routes.use("/api/inspectorate", inspectorateRouter)
routes.use("/api/professional", professionalRouter)
routes.use("/api/scheduling", schedulingRouter)
routes.use("/api/admin", adminRouter)
routes.use("/api/hours", hoursRouter)
routes.use("/api/profissional", autenticarProfissionalSitac)

routes.use("/api/tables", tableRouter)
routes.use("/api/baias", baiaRouter)

routes.use("/api/mesaIndividual", mesaIndividualRouter)


export default routes
