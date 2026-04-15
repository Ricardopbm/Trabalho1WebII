import { Router } from "express";

import * as controller from "../controllers/usersController";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";

const usersRouter = Router();



usersRouter.get("/users", (req, res) => controller.getAll(req, res));

export default usersRouter;

