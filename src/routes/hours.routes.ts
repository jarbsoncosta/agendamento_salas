
import { ListAllHoursRoomsIdController } from '@controllers/Inspectorate/list_all_hours_room_contoller'
import { ListHoursController } from '@controllers/Inspectorate/list_hours_controller'
import { Router } from 'express'


const hoursRouter = Router()
hoursRouter.get("/", new ListHoursController().handle)
hoursRouter.get("/:roomId", new ListAllHoursRoomsIdController().handle)



export default hoursRouter