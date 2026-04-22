import { Router } from "express";
import { isSeller } from "../middleware/isSeller";
import { sellerRender } from "../controllers/sellerController";

const sellerRoutes = Router();

sellerRoutes.get('/seller', isSeller, (req, res) => sellerRender(req, res));

export default sellerRoutes;
