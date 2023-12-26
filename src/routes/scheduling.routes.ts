
import { CreateSchedulingController } from '../controllers/Scheduling/create_scheduling_controller'
import { ListAllSchedulingController } from '../controllers/Scheduling/list_all_scheduling_contoller'
import { Router } from 'express'
import { professionalAuthenticate } from '../middlewares/professionalAuthenticate'
import { ListAllSchedulingAdminController } from '../controllers/Scheduling/list_all_scheduling_contoller_admin'
import { UpdateSchedulingController } from '../controllers/Scheduling/update_scheduling_controller'
import { CanceLSchedulingProfessionalIdController } from '../controllers/Scheduling/cancel_scheduling_professional_id_controller copy'
import { adminAuthenticate } from 'src/middlewares/admin_authenticate'

const schedulingRouter = Router()
schedulingRouter.post("/",new CreateSchedulingController().handle)
schedulingRouter.get("/", new ListAllSchedulingController().handle)
schedulingRouter.get("/all", adminAuthenticate, new ListAllSchedulingAdminController().handle)
schedulingRouter.put("/status/:id", adminAuthenticate, new UpdateSchedulingController().handle)
schedulingRouter.patch("/cancel/:professionalId",professionalAuthenticate, new CanceLSchedulingProfessionalIdController().handle)



export default schedulingRouter