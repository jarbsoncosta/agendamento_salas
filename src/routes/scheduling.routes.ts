import { CreateSchedulingController } from "../controllers/Scheduling/create_scheduling_controller";
import { ListAllSchedulingController } from "../controllers/Scheduling/list_all_scheduling_contoller";
import { Router } from "express";
import { ListAllSchedulingAdminController } from "../controllers/Scheduling/list_all_scheduling_contoller_admin";
import { UpdateSchedulingController } from "../controllers/Scheduling/update_scheduling_controller";
import { adminAuthenticate } from "../middlewares/admin_authenticate";
import { CreateTermScienceController } from "../controllers/Scheduling/create_term_science_controller";
import { ListAllTermScienceActiveController } from "../controllers/Scheduling/list_term_active_contoller";
import { UpdateDadosConvidadoController } from "../controllers/Scheduling/update_dados_convidado_controller";
import multer from "multer"; // Importe o multer

// Configurar o multer para armazenar os arquivos em memória
const upload = multer({
  storage: multer.memoryStorage()
});


const schedulingRouter = Router();
schedulingRouter.post("/", new CreateSchedulingController().handle);
schedulingRouter.get("/", new ListAllSchedulingController().handle);
schedulingRouter.get(
  "/all",
  adminAuthenticate,
  new ListAllSchedulingAdminController().handle
);
schedulingRouter.put(
  "/status/:id",
  adminAuthenticate,
  new UpdateSchedulingController().handle
);

schedulingRouter.all(
  "/list_term",
  new ListAllTermScienceActiveController().handle
);
// Rota para criar termo de ciência com upload de arquivo
schedulingRouter.post("/create_term", upload.single('file'), new CreateTermScienceController().handle);

schedulingRouter.put("/convidado/:convidadoId", new UpdateDadosConvidadoController().handle);

export default schedulingRouter;
