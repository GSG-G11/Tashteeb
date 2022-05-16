import console from 'console';
import { Request, Response } from 'express';
import { Product } from '../../database';
import handleUnknownExceptions from '../../error/handleUnkownError';

const getProductByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    console.log(categoryId);
    const products = await Product.findAll({ where: { categoryId } });
    res.json({ status: 200, data: products });
  } catch (err: any) {
    console.log(err);
    handleUnknownExceptions(err, res);
  }
};

export default getProductByCategory;
