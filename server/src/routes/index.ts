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
  createReview,
  getProductByCategory,
  userOrder,
  engReply,
  getUserHirings,
  getEngHirings,
  completeService,
} from '../controller';
import {
  isUser, isRegularUser, isAdmin, isEngineer,
} from '../middlewares';
import {
  signup,
  logout,
  login,
  currentUser,
} from '../controller/userAuth/index';
import customErrorHandler from '../error';
import uploadImage from '../controller/cloudinaryController';
import multer from '../middlewares/multer';

const router = Router();

router.get('/engineers', getAllEngineer);
router.get('/engineers/home', getEngineer);
router.get('/engineers/:id', gitEngineerById);

router.post('/signup', signup);
router.post('/login', login);
router.get('/auth/user', currentUser);
router.post('/logout', logout);

router.get('/products', getProducts);
router.get('/products/:id', getProducrById);
router.post('/products', isAdmin, addProduct);
router.patch('/products/:id', isAdmin, updateProduct);
router.delete('/products/:id', isAdmin, deleteProduct);

router.get('/categories', getCategories);
router.post('/image', multer.single('images'), uploadImage);
router.post('/checkout', isUser, checkout);
router.post('/products', isAdmin, addProduct);

router.get('/hiringOrder', isRegularUser, getUserHirings);
router.get('/hiringOrder/engineer', isEngineer, getEngHirings);
router.post('/hiringOrder/:id', isRegularUser, userOrder);
router.patch('/hiringOrder/:id', isEngineer, engReply);
router.get('/hiringOrder/:id/complete', isEngineer, completeService);

router.post('/review/:orderId', isRegularUser, createReview);

router.get('/category/:categoryId/products', getProductByCategory);
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
