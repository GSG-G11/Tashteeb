import { Request, Response } from 'express';
import { Product } from '../../database';
import handleUnknownExceptions from '../../error/handleUnkownError';

const getProducrById = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const productInfo = await Product.findOne({ where: { id } });
    if (productInfo) {
      res.json({ status: 200, data: productInfo });
    } else {
      res.json({ status: 404, message: 'product not found' });
    }
  } catch (err:any) {
    handleUnknownExceptions(err, res);
  }
};
export default getProducrById;
