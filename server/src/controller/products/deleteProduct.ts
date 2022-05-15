import { Request, Response } from 'express';
import { Product } from '../../database';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      throw new CustomizeError(404, 'Product not found!');
    }
    await product.destroy();
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    handleKnownExceptions(err, res);
  }
};

export default deleteProduct;
