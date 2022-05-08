import { Router, Request, Response } from 'express';
import getAllEngineer from '../controller';
import { signUp, logout } from '../controller/userAuth/index';
import customErrorHandler from '../error';

const router = Router();
router.get('/engPage', getAllEngineer);
router.post('/signup', signUp);
router.post('/logout', logout);
router.use((err: any, req: Request, res: Response) => {
  customErrorHandler(err, res);
});
export default router;
