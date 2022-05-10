import { Request, Response } from 'express';
import { Product } from '../../database';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      throw new CustomizeError(404, 'Product not found!');
    }
    await product.update(req.body);
    res.status(201).json({ message: 'Product updated', data: product });
  } catch (err) {
    handleKnownExceptions(err, res);
  }
};

export default updateProduct;
