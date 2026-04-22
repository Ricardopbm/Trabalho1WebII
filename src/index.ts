import dotenv from 'dotenv';;
dotenv.config();

import './config/db';
import { User } from './models/userModel';
import { getAll } from './controllers/adminController';

  

import express from 'express';
import session from 'express-session';
import authRouter from './routes/authRoutes';
import { isAuthenticated } from './middleware/authMiddleware';
import adminRoutes from './routes/adminRoutes';
import sellerRoutes from './routes/sellerRoutes';
import customerRoutes from './routes/customerRoutes';

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


app.get('/', (req,res) => { res.render('index')});

// app.use('/users',isAuthenticated, usersRouter);
app.use('/auth', authRouter);
app.use(isAuthenticated, adminRoutes);
app.use(isAuthenticated, sellerRoutes);
app.use(isAuthenticated, customerRoutes);



const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});