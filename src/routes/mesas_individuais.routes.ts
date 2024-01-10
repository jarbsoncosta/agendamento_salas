import { Router } from 'express'
import { CriartMesasIndividuaisController } from '../controllers/Inspectorate/MesaIndividual/create_mesa_controller'
import { ListMesasIndividuaisController } from '../controllers/Inspectorate/MesaIndividual/list_mesas_individuais_controller'
import { CreateReservaMesaIndividualController } from '../controllers/Inspectorate/MesaIndividual/create_reserva_baia_controller'
import { ListReservasMesasIndividuaisController } from '../controllers/Inspectorate/MesaIndividual/list_reservas_mesas_individuais_controller'
import { UpdataStatusReservaMesaIndividualController } from '../controllers/Inspectorate/MesaIndividual/update_status_reserva_mesa_individual_controller'
import { adminAuthenticate } from 'src/middlewares/admin_authenticate'


const mesaIndividualRouter = Router()
//Rota para criar mesas e cadeiras
mesaIndividualRouter.get("/list/:inspectorateId", new ListMesasIndividuaisController().handle)
mesaIndividualRouter.get("/list_reservas/:inspectorateId", new ListReservasMesasIndividuaisController().handle)
mesaIndividualRouter.post("/criar_mesa", adminAuthenticate, new CriartMesasIndividuaisController().handle)
mesaIndividualRouter.post("/reserva_mesa", adminAuthenticate, new CreateReservaMesaIndividualController().handle)
mesaIndividualRouter.put("/reserva_mesa_individual/status/:id", adminAuthenticate, new UpdataStatusReservaMesaIndividualController().handle)


export default mesaIndividualRouter