import { join } from 'path';
import dotenv from 'dotenv';
import express, { Request, Response, Application } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import sync from './database/FakeData/sync';

const app: Application = express();
sync();
app.set('port', process.env.PORT || 8070);
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

const {
  env: { NODE_ENV },
} = process;
if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}

export default app;
