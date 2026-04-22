import db from "../config/db";

import bcrypt from 'bcrypt';

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    typeUser: string;
}

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    typeUser: string;

    constructor(id: number, name: string, email: string, password: string, typeUser: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.typeUser = typeUser;
    }

    static create(name: string, email: string, password: string, typeUser: string): User {

        const passwordHash = bcrypt.hashSync(password, 10);

        const stmt = db.prepare("INSERT INTO users (name, email, password, typeUser) VALUES (?, ?, ?, ?)");
        const result = stmt.run(name, email, passwordHash, typeUser);
        // const stmt = db.prepare("UPDATE users SET typeUser = ? WHERE id = 5;");
        // const result =  stmt.run("Administrador");
        // console.log(result.changes);
        
        const user = new User(
            result.lastInsertRowid as number,
            name,
            email,
            passwordHash,
            typeUser
        );

        return user;
    }

    static getEmail(email: string): User | null {
        const stmt = db.prepare("SELECT * FROM users WHERE email = ?");
        const user = stmt.get(email) as User | null;
        return user;
    }


    static getAll(): User[] {
        const stmt = db.prepare("SELECT * FROM users");
        const users = stmt.all() as User[];
        return users;
    }


}



