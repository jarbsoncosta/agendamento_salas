import { Router } from 'express'
import { CreateBaiaController } from '../controllers/Inspectorate/Baia/create_baia_controller'
import { ListBaiasController } from '../controllers/Inspectorate/Baia/list_baias_controller'
import { CreateReservaBaiaController } from '../controllers/Inspectorate/Baia/create_reserva_baia_controller'
import { ListReservasController } from '../controllers/Inspectorate/Baia/list_reservas_baias_controller'
import { UpdataStatusReservaBaiaController } from '../controllers/Inspectorate/Baia/update_status_baia_controller'
import { adminAuthenticate } from 'src/middlewares/admin_authenticate'


const baiaRouter = Router()
//Rota para criar mesas e cadeiras
baiaRouter.get("/list/:inspectorateId", new ListBaiasController().handle)
baiaRouter.get("/list_reservas/:inspectorateId", new ListReservasController().handle)
baiaRouter.post("/criar_baia", adminAuthenticate, new CreateBaiaController().handle)
baiaRouter.post("/criar_reserva_baia", adminAuthenticate, new CreateReservaBaiaController().handle)
baiaRouter.put("/reserva/status/:id", adminAuthenticate, new UpdataStatusReservaBaiaController().handle)


export default baiaRouter