import {Response, Request} from 'express';

import {User} from '../models/userModel';



export function getAll(req: Request, res: Response) {
    const users = User.getAll();
    res.render('admin-dashboard', { users : users });
}


