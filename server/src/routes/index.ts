import { Router, Request, Response } from 'express';
import getEngineer from '../controller';

import {
  signup, logout, login, currentUser,
} from '../controller/userAuth/index';
import customErrorHandler from '../error';

const router = Router();
router.post('/signup', signUp);
router.get('/engHome', getEngineer);
router.post('/signup', signup);
router.post('/login', login);
router.get('/auth/user', currentUser);
router.get('/engHome', getEngineer);
router.post('/logout', logout);
router.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Not found',
  });
});
router.use((err: any, req: Request, res: Response) => {
  customErrorHandler(err, res);
});

export default router;
