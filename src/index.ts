import dotenv from 'dotenv';;
dotenv.config();

import './config/db';
import { User } from './models/userModel';
<<<<<<< HEAD
import { getAll } from './controllers/adminController';

=======
import { getAll } from './controllers/usersController';
import usersRouter from './routes/userRoutes';
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e
  

import express from 'express';
import session from 'express-session';
import authRouter from './routes/authRoutes';
import { isAuthenticated } from './middleware/authMiddleware';
<<<<<<< HEAD
import adminRoutes from './routes/adminRoutes';
import sellerRoutes from './routes/sellerRoutes';
import customerRoutes from './routes/customerRoutes';
=======
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e

declare module 'express-session' {
  interface SessionData {
    urls:[]
    authenticated?: boolean;
    user?: {
      id: number;
      role: string;
    };
  }
}

const app = express();



app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: true }));
app.use(session({       
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false,
}));

<<<<<<< HEAD

app.get('/', (req,res) => { res.render('index')});

// app.use('/users',isAuthenticated, usersRouter);
app.use('/auth', authRouter);
app.use(isAuthenticated, adminRoutes);
app.use(isAuthenticated, sellerRoutes);
app.use(isAuthenticated, customerRoutes);
=======
app.use(isAuthenticated, usersRouter);
app.use(authRouter);
>>>>>>> 08bc6c7b3cd77073f9d7d2954743706a3d5f425e



const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});