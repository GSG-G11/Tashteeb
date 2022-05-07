import { Product } from '../models';

const deleteProductByName = async (productName : string) => {
  await Product.destroy({ where: { name: productName } });
};

export default deleteProductByName;
