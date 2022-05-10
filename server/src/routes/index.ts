import { Router, Request, Response } from 'express';
import { getEngineer, getProducts, getCategories } from '../controller';

import {
  signup, logout, login, currentUser,
} from '../controller/userAuth/index';
import customErrorHandler from '../error';

const router = Router();
router.post('/signup', signup);
router.get('/engHome', getEngineer);
router.post('/signup', signup);
router.post('/login', login);
router.get('/auth/user', currentUser);
router.get('/engHome', getEngineer);
router.post('/logout', logout);
router.get('/products', getProducts);
router.get('/categories', getCategories);
router.use((err: any, req: Request, res: Response) => {
  customErrorHandler(err, res);
});

export default router;
