import { Router } from "express";

import { isCustomer } from "../middleware/isCustomer";
import { customerRender } from "../controllers/customerController";

const customerRoutes = Router();

customerRoutes.get('/index', isCustomer, customerRender);

export default customerRoutes;