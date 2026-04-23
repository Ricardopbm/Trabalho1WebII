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

        req.session.authenticated = true;
        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.typeUser
        };
        
        if (typeUser === 'Comprador' && user.typeUser == 'Comprador') {
            res.redirect('/customerIndex');
        } else if (typeUser === 'Vendedor' && user.typeUser == 'Vendedor') {
            res.redirect('/seller');
        } else if (typeUser === 'Administrador' && user.typeUser == 'Administrador') {
            res.redirect('/admin');
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
    const fullName = name+" "+lastname;
    const email = (req.body.email || '').trim();
    const password = (req.body.password || '').trim();
    const typeUser = (req.body.typeUser || '').trim();

    if (name) {
        const user = User.create(fullName, email, password, typeUser);  
        // res.status(201).json({ message: "Usuário criado", user });
        res.redirect('/auth/login');
    } else {
        res.status(400).json({ error: "Nome é obrigatório" });
    }


}


export function signup(req: Request, res: Response) {
    res.render('signup');
}

export function loginRender(req: Request, res: Response) {
    res.render('login');
}

export function logout(req: any, res: any) {
    req.session.destroy((err: any) => {
        if (err) {
            console.error('Erro ao destruir a sessão:', err);
        }else {
            res.redirect('/auth/login');
        }
    });
}
