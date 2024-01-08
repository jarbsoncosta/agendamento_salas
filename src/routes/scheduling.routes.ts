import { CreateSchedulingController } from "../controllers/Scheduling/create_scheduling_controller";
import { ListAllSchedulingController } from "../controllers/Scheduling/list_all_scheduling_contoller";
import { Router } from "express";
import { ListAllSchedulingAdminController } from "../controllers/Scheduling/list_all_scheduling_contoller_admin";
import { UpdateSchedulingController } from "../controllers/Scheduling/update_scheduling_controller";
import { adminAuthenticate } from "../middlewares/admin_authenticate";
import { CreateTermScienceController } from "../controllers/Scheduling/create_term_science_controller";
import { ListAllTermScienceActiveController } from "../controllers/Scheduling/list_term_active_contoller";


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
schedulingRouter.post("/create_term", new CreateTermScienceController().handle);


export default schedulingRouter;
