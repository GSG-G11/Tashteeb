import { Request, Response } from 'express';

import Product from '../../database/models/Product';
import handleKnownExceptions from '../../error/handleKnownError';
import signupValidation from '../../validaiton/signupValidation';

const addProduct = async (req: Request, res: Response) => {
  const {
    name, price, description, categoryId,
  }: any = req.body;
  try {
    await signupValidation(req);
    const product = await Product.create({
      name,
      price,
      description,
      categoryId,
    });
    res.json({ status: 200, product });
  } catch (err: any) {
    if (err.details) {
      res.status(422).json({ message: err.message });
    } else {
      handleKnownExceptions(err, res);
    }
  }
};

export default addProduct;
