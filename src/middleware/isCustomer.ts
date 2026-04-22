import { Request, Response, NextFunction } from "express";
import 'express-session';

declare module 'express-session'{
    interface SessionData{
        user?: {
            id: number;
            role: string;
        }

    }
}
export function isCustomer(req: Request, res: Response, next: NextFunction) {
    if (req.session.user?.role == 'Comprador') {
        return next();
    } else {
        res.status(401).send("Necessário ter perfil Comprador para acessar esta Página");
    }
}
