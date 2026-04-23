import { Router } from "express";
import { login, create, signup, loginRender, logout} from "../controllers/authController";
import usersRouter from "./userRoutes";
import { log } from "console";
// Ajuste o caminho se necessário

const authRouter = Router();



authRouter.post("/signup", (req, res) => create(req, res)); 

authRouter.get("/signup", (req, res) => signup(req,res)); 
authRouter.get("/login", (req, res) => loginRender(req, res));

authRouter.post("/login", login);

authRouter.get("/logout", (req, res) => logout(req, res));

export default authRouter;