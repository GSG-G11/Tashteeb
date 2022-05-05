import { Router as router, Request, Response } from 'express';
import customErrorHandler from '../error';
import login from '../controller/userAuth/login';

const api = router();

api.get('/', (req, res) => {
  res.send('Hello World!');
});
api.post('/login', login);

api.use((err: any, req: Request, res: Response) => {
  console.log(err.name);
  customErrorHandler(err, res);
});

export default api;
