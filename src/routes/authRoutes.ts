import { Router } from "express";
<<<<<<< HEAD
import { login, create, signup, loginRender} from "../controllers/authController";
import usersRouter from "./userRoutes";
// Ajuste o caminho se necessário

const authRouter = Router();



authRouter.post("/signup", (req, res) => create(req, res)); 

authRouter.get("/signup", (req, res) => signup(req,res)); //separação de responsabilidade

authRouter.get("/login", (req, res) => loginRender(req, res));
=======
import { login, create, signup } from "../controllers/authController";
import usersRouter from "./userRoutes";
 // Ajuste o caminho se necessário

const authRouter = Router();

authRouter.get("/login", (req, res) => {
    res.render('login');
});

usersRouter.post("/register", (req, res) => create(req, res)); // Use authController em vez de controller

usersRouter.get("/signup", (req, res) => signup(req, res)); // Use authController
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e

authRouter.post("/login", login);

export default authRouter;