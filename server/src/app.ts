import { join } from 'path';
import dotenv from 'dotenv';
import express, { Request, Response, Application } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import getProducts from './controller/products/getProducts';

const app: Application = express();
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
app.get('/m7med', getProducts);
export default app;
