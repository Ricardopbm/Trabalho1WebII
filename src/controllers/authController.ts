import { Request, Response } from 'express';

import {User} from '../models/userModel';

import bcrypt from 'bcrypt';

export async function login(req: any, res: any) {
    const email = (req.body.email || '').trim();
    const password = (req.body.password || '').trim();
    const user = User.getEmail(email);
    const typeUser = (req.body.typeUser || '').trim();

    if (!user) {
        return res.status(401).json({ error: "Email ou senha inválidos" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if ( passwordMatch ) {

<<<<<<< HEAD
        req.session.authenticated = true;
=======
        req.session.autenticated = true;
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e
        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.typeUser
        };
        
        if (typeUser === 'Comprador' && user.typeUser == 'Comprador') {
<<<<<<< HEAD
            res.redirect('/customer');
        } else if (typeUser === 'Vendedor' && user.typeUser == 'Vendedor') {
            res.redirect('/seller');
        } else if (typeUser === 'Administrador' && user.typeUser == 'Administrador') {
            res.redirect('/admin');
=======
            res.render('index');
        } else if (typeUser === 'Vendedor' && user.typeUser == 'Vendedor') {
            res.render('seller-dashboard');
        } else if (typeUser === 'Administrador' && user.typeUser == 'Administrador') {
            res.render('admin-dashboard');
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e
        } else {
            res.status(401).json({ error: "Tipo de usuário inválido" });
        }

    } else {
        res.status(401).json({ error: "Email ou senha inválidos" });
    }



};

export function create (req: Request, res: Response) {
    const name = (req.body.name || '').trim();
    const lastname = (req.body.lastname || '').trim();
<<<<<<< HEAD
    const fullName = name+" "+lastname;
=======
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e
    const email = (req.body.email || '').trim();
    const password = (req.body.password || '').trim();
    const typeUser = (req.body.typeUser || '').trim();

    if (name) {
<<<<<<< HEAD
        const user = User.create(fullName, email, password, typeUser);  
        // res.status(201).json({ message: "Usuário criado", user });
        res.redirect('/auth/login');
=======
        const user = User.create(name, email, password, typeUser);  
        res.status(201).json({ message: "Usuário criado", user });
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e
    } else {
        res.status(400).json({ error: "Nome é obrigatório" });
    }


}


export function signup(req: Request, res: Response) {
    res.render('signup');
}
<<<<<<< HEAD

export function loginRender(req: Request, res: Response) {
    res.render('login');
}
=======
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e
