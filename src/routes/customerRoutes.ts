import { Router } from "express";

import { isCustomer } from "../middleware/isCustomer";
import { customerRender, cart, orders, customerIndex, details,  } from "../controllers/customerController";
import usersRouter from "./userRoutes";

const customerRoutes = Router();

customerRoutes.get('/customerIndex', (req, res) => customerIndex(req, res));

customerRoutes.get('/categories', isCustomer, customerRender);

customerRoutes.get("/cart", (req, res) => cart(req, res));

customerRoutes.get('/orders', (req, res) => orders(req, res));

customerRoutes.get('/details', (req, res) => details(req, res));

export default customerRoutes;