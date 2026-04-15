import dotenv from 'dotenv';;
dotenv.config();

import './config/db';
import { User } from './models/userModel';
import { getAll } from './controllers/usersController';
import usersRouter from './routes/userRoutes';
  

import express from 'express';
import session from 'express-session';
import authRouter from './routes/authRoutes';
import { isAuthenticated } from './middleware/authMiddleware';

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

app.use(isAuthenticated, usersRouter);
app.use(authRouter);



const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});