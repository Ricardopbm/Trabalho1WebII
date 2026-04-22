import { Request, Response, NextFunction } from 'express';
import 'express-session';

declare module 'express-session' {
  interface SessionData {
    authenticated?: boolean;
  }
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (req.session.authenticated) {
        return next();
    } else {
<<<<<<< HEAD
        res.redirect('/auth/login');
=======
        res.redirect('/login');
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e
    }
}