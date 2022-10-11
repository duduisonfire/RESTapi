import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import { resolve } from 'path';
import home from './routes/home';
import user from './routes/user';
import tokens from './routes/tokens';
import aluno from './routes/aluno';
import photo from './routes/photo';
import './database/index';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users/', user);
    this.app.use('/tokens/', tokens);
    this.app.use('/alunos/', aluno);
    this.app.use('/photo/', photo);
  }
}

export default new App().app;
