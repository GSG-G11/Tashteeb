import { Request, Response } from 'express';
import { Product } from '../../database';
import handleUnknownExceptions from '../../error/handleUnkownError';

const getProductByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const products = await Product.findAll({ where: { categoryId }, limit: 5 });
    if (products.length) {
      res.json({ status: 200, data: products });
    } else {
      res.json({ status: 404, message: 'No products found' });
    }
  } catch (err: any) {
    handleUnknownExceptions(err, res);
  }
};

export default getProductByCategory;
