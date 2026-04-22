import { Router } from "express";

import { getAll } from "../controllers/adminController";
import { isAdmin } from "../middleware/isAdmin";

const adminRoutes = Router();

adminRoutes.get('/admin', isAdmin, getAll);

export default adminRoutes;