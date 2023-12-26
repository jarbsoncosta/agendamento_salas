
import { CreateChairInTableController } from '../controllers/SchedulingTable/create_chair_table_controller'
import { CreateChairController } from '../controllers/Inspectorate/Chair/create_chair_controller'
import { CreateTableController } from '../controllers/Inspectorate/Table/create_table_controller'
import { ListTablesController } from '../controllers/Inspectorate/Table/list_tables_controller'

import { Router } from 'express'
import { UpdataStatusSchedulingTableController } from '../controllers/SchedulingTable/update_status_table_controller'


const tableRouter = Router()
//Rota para criar mesas e cadeiras
tableRouter.get("/list/:inspectorateId", new ListTablesController().handle)
tableRouter.post("/criar_mesa", new CreateTableController().handle)
tableRouter.post("/criar_cadeira", new CreateChairController().handle)

tableRouter.post("/agendar_lugar_mesa", new CreateChairInTableController().handle)
tableRouter.put("/agendamento/status/:id", new UpdataStatusSchedulingTableController().handle)


export default tableRouter