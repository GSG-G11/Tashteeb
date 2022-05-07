import { Product } from '../models';

const findProductByName = async (productName:string) => {
  await Product.findAll({ where: { name: productName } });
};

export default findProductByName;
