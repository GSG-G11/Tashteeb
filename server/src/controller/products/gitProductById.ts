import { Request, Response } from 'express';
import { Product } from '../../database';
import handleUnknownExceptions from '../../error/handleUnkownError';

const getProducrById = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const productInfo = await Product.findOne({ where: { id } });
    res.json({ status: 200, data: productInfo });
  } catch (err:any) {
    handleUnknownExceptions(err, res);
  }
};
export default getProducrById;
