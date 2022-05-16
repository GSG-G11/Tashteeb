import {
  getProducts, addProduct, deleteProduct, updateProduct, getProducrById,
} from './products';

import { getCategories } from './categories';
import getEngineer from './engineer/gitEngineer';
import gitEngineerById from './engineer/gitEngineerById';
import getAllEngineer from './engineer/gitAllEngineers';

import checkout from './cart/checkout';
import createReview from './Review/Review';

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
};
