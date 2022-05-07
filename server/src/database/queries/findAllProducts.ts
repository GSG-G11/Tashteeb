import { Product } from '../models';

const findAllProducts = async () => {
  const ff = await Product.findAll();
  console.log(ff);
};
export default findAllProducts;
