

import { CreateInspectorateController } from '../controllers/Inspectorate/create_Inspectorate_controller'
import { CreateRoomController } from '../controllers/Inspectorate/create_room_controller'
import { ListAllRoomsInspectoratesController } from '../controllers/Inspectorate/list_all_rooms_inspectorates_contoller'
import { ListInspectorateController } from '../controllers/Inspectorate/list_Inspectorate_controller'
import { ShowInspectorateController } from '../controllers/Inspectorate/show_Inspectorate_id_controller'
import { ShowProfessionalController } from '../controllers/Professional/show_professional_id_controller'
import { Router } from 'express'
import { CreateHourController } from '../controllers/Inspectorate/create_hour_controller'
import { ListHoursController } from '../controllers/Inspectorate/list_hours_controller'


//import { userAuthenticate } from 'src/middlewares/userAuthenticate'

const inspectorateRouter = Router()

inspectorateRouter.get("/", new ListInspectorateController().handle)
inspectorateRouter.get("/:id", new ShowInspectorateController().handle)
inspectorateRouter.post("/", new CreateInspectorateController().handle)
inspectorateRouter.post("/room", new CreateRoomController().handle)
inspectorateRouter.get("/rooms/:inspetoriaId", new ListAllRoomsInspectoratesController().handle)
//inspectorateRouter.post('/session', new AuthenticateController().handle)

inspectorateRouter.get("/professional", new ShowProfessionalController().handle)

inspectorateRouter.post("/hour", new CreateHourController().handle)


export default inspectorateRouter