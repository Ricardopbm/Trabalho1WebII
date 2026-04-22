import { Router } from "express";
import { login, create, signup, loginRender} from "../controllers/authController";
import usersRouter from "./userRoutes";
// Ajuste o caminho se necessário

const authRouter = Router();



authRouter.post("/signup", (req, res) => create(req, res)); 

authRouter.get("/signup", (req, res) => signup(req,res)); //separação de responsabilidade

authRouter.get("/login", (req, res) => loginRender(req, res));

authRouter.post("/login", login);

export default authRouter;