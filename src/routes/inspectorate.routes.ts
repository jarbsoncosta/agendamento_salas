

import { CreateInspectorateController } from '@controllers/Inspectorate/create_Inspectorate_controller'
import { CreateRoomController } from '@controllers/Inspectorate/create_room_controller'
import { ListInspectorateController } from '@controllers/Inspectorate/list_Inspectorate_controller'
import { ShowInspectorateController } from '@controllers/Inspectorate/show_Inspectorate_id_controller'
import { Router } from 'express'

//import { userAuthenticate } from 'src/middlewares/userAuthenticate'

const inspectorateRouter = Router()

inspectorateRouter.get("/", new ListInspectorateController().handle)
inspectorateRouter.get("/:id", new ShowInspectorateController().handle)
inspectorateRouter.post("/", new CreateInspectorateController().handle)
inspectorateRouter.post("/room", new CreateRoomController().handle)
//inspectorateRouter.post('/session', new AuthenticateController().handle)


export default inspectorateRouter