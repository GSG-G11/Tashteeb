import dotenv from 'dotenv';
import express from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import compression from 'compression';

const app = express();
app.set('port', process.env.PORT || 8080);
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

const { NODE_ENV } = process.env;
if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}

export default app;
