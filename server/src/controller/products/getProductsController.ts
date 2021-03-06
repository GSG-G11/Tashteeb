import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { Product, Category } from '../../database';
import handleKnownExceptions from '../../error/handleKnownError';

const getProducts = async (req: Request, res: Response) => {
  const {
    q,
    categoryId,
    minPrice,
    maxPrice,
    limit = 6,
    page = 1,
  }: any = req.query;

  try {
    const offset = (page - 1) * limit;

    const product = await Product.findAndCountAll({
      attributes: ['id', 'name', 'price', 'description', 'categoryId', 'image'],
      include: Category,
      limit,
      offset: offset > 0 ? offset : 0,
      where: {
        [Op.and]: [
          q && { name: { [Op.iLike]: `%${q}%` } },
          categoryId && { categoryId },
          minPrice
            && maxPrice && {
            price: {
              [Op.between]: [
                minPrice || 0,
                maxPrice || Number.MAX_SAFE_INTEGER,
              ],
            },
          },
        ],
      },
    });

    res.json({ status: 200, product });
  } catch (error: any) {
    if (error.errors) {
      handleKnownExceptions(error, res);
    }
  }
};

export default getProducts;
