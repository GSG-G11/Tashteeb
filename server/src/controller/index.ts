import {
  getProducts, addProduct, deleteProduct, updateProduct, getProducrById, getProductByCategory,
} from './products';

import { getCategories } from './categories';
import getEngineer from './engineer/gitEngineer';
import gitEngineerById from './engineer/gitEngineerById';
import getAllEngineer from './engineer/gitAllEngineers';
import {
  engReply,
  userOrder,
  getUserHirings,
  getEngHirings,
  completeService,
  getHiringOrders,
  deleteHiringOrder,
} from './hiringOrder';
import checkout from './cart/checkout';
import getAllOrders from './hiringOrder/getAllOrders';
import createReview from './Review/Review';
import getSatistics from './Satistics';

export {
  checkout,
  getProducrById,
  getEngineer,
  getAllEngineer,
  gitEngineerById,
  getCategories,
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  createReview,
  getProductByCategory,
  userOrder,
  engReply,
  getAllOrders,
  getUserHirings,
  getEngHirings,
  completeService,
  getSatistics,
  getHiringOrders,
  deleteHiringOrder,
};
