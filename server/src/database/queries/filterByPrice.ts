import { Op } from 'sequelize';
import { Product } from '../models';

const filterByPrice = async (lowPrice: number, highPrice: number) => {
  await Product.findAll({
    where: { price: { [Op.between]: [lowPrice || 0, highPrice || 10000] } },
  });
};

export default filterByPrice;
