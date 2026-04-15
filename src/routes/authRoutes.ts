import { Router } from "express";
import { login, create, signup } from "../controllers/authController";
import usersRouter from "./userRoutes";
 // Ajuste o caminho se necessário

const authRouter = Router();

authRouter.get("/login", (req, res) => {
    res.render('login');
});

usersRouter.post("/register", (req, res) => create(req, res)); // Use authController em vez de controller

usersRouter.get("/signup", (req, res) => signup(req, res)); // Use authController

authRouter.post("/login", login);

export default authRouter;