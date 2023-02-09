
import { CreateSchedulingController } from '../controllers/Scheduling/create_scheduling_controller'
import { ListAllSchedulingController } from '../controllers/Scheduling/list_all_scheduling_contoller'
import { Router } from 'express'
import { professionalAuthenticate } from '../middlewares/professionalAuthenticate'
import { ListAllSchedulingAdminController } from '@controllers/Scheduling/list_all_scheduling_contoller_admin'
import { UpdateSchedulingController } from '@controllers/Scheduling/update_scheduling_controller'

const schedulingRouter = Router()
schedulingRouter.post("/", professionalAuthenticate, new CreateSchedulingController().handle)
schedulingRouter.get("/", professionalAuthenticate, new ListAllSchedulingController().handle)
schedulingRouter.get("/admin", new ListAllSchedulingAdminController().handle)
schedulingRouter.put("/status/:id", new UpdateSchedulingController().handle)



export default schedulingRouter