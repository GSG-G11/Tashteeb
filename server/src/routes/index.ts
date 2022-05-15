import { Router, Request, Response } from 'express';

import {
  getEngineer,
  getProducts,
  addProduct,
  getCategories,
  getAllEngineer,
  gitEngineerById,
  checkout,
  getProducrById,
  deleteProduct,
  updateProduct,
} from '../controller';
import { isUser } from '../middlewares';

import {
  signup,
  logout,
  login,
  currentUser,
} from '../controller/userAuth/index';
import customErrorHandler from '../error';
import isAdmin from '../middlewares/admin';

const router = Router();

router.get('/engPage', getAllEngineer);
router.get('/eng/:id', gitEngineerById);
router.get('/product/:id', getProducrById);
router.get('/engHome', getEngineer);
router.post('/signup', signup);
router.get('/engHome', getEngineer);
router.post('/login', login);
router.get('/auth/user', currentUser);
router.post('/logout', logout);
router.get('/products', getProducts);
router.delete('/products/:id', isAdmin, deleteProduct);
router.patch('/products/:id', isAdmin, updateProduct);
router.get('/categories', getCategories);
router.post('/checkout', isUser, checkout);
router.post('/products', isAdmin, addProduct);

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
