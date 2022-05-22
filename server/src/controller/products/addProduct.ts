import { Request, Response } from 'express';

import Product from '../../database/models/Product';
import handleKnownExceptions from '../../error/handleKnownError';
import upload from '../../middlewares/cloudinary';
import addProductValidation from '../../validaiton/addProductValidation';

interface IReqUser extends Request {
  user?: any;
}

const addProduct = async (req: IReqUser, res: Response) => {
  try {
    const {
      name, price, description, categoryId,
    }: any = req.body;
    let { image } = req.body;
    console.log(image);
    await addProductValidation(req);
    if (image) {
      image = await upload(image, 'images');
    }

    const product = await Product.create({
      name,
      price,
      description,
      categoryId,
      image,
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
