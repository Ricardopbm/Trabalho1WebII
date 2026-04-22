<<<<<<< HEAD



import bcrypt from 'bcrypt';
import { log } from 'console';
=======
// import db from './db';
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e

// db.exec(`
//   CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     email TEXT NOT NULL UNIQUE,
//     password TEXT NOT NULL,
//     typeUser TEXT NOT NULL
//   )
<<<<<<< HEAD
// `);


    const password = 'admin';
    const passwordHash = bcrypt.hashSync(password, 10);
    console.log(passwordHash);
    

    
=======
// `);
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e
