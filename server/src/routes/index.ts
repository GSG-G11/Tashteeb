import { Router, Request, Response } from 'express';
import {
<<<<<<< HEAD
  getEngineer, getProducts, getCategories, getAllEngineer,
=======
  getEngineer,
  getProducts,
  getCategories,
  getAllEngineer,
>>>>>>> a8df0b5808121bdb68b66e5a216ccbffd70374be
} from '../controller';

import {
  signup,
  logout,
  login,
  currentUser,
} from '../controller/userAuth/index';
import customErrorHandler from '../error';

const router = Router();

router.get('/engPage', getAllEngineer);
router.get('/engHome', getEngineer);
router.post('/signup', signup);
router.get('/engHome', getEngineer);
router.post('/login', login);
router.get('/auth/user', currentUser);
router.post('/logout', logout);
router.get('/products', getProducts);
router.get('/categories', getCategories);

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
