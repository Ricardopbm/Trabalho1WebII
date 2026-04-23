// import db from './db';

// db.exec(`
//   CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     email TEXT NOT NULL UNIQUE,
//     password TEXT NOT NULL,
//     typeUser TEXT NOT NULL
//   )
// `);


    const password = 'admin';
    const passwordHash = bcrypt.hashSync(password, 10);
    console.log(passwordHash);
    

    
