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
        res.redirect('/login');
    }
}