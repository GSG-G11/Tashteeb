import { Product } from '../models';

const findAllProducts = async () => {
  await Product.findAll();
};
export default findAllProducts;
