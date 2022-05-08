// q=‘hummer’&category_id=12&minPrice=1&maxPrice=100&limit=10&page=2
import { Op } from 'sequelize';
import { Product } from '../models';

const getProduct = async (
  q: string,
  categoryId: number,
  minPrice: number,
  maxPrice: number,
  limit : number,
) => {
  await Product.findAll({
    where: {
      name: { [Op.substring]: q },
      categoryId,
      price: { [Op.between]: [minPrice || 0, maxPrice || Number.MAX_SAFE_INTEGER] },
      limit,
    },
  });
};

export default getProduct;
