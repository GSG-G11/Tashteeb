import { Request, Response } from 'express';
import { Review } from '../../database';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';

const createReview = async (req: Request, res: Response) => {
  const {
    rate,
  }: any = req.body;
  const { orderId } = req.params;

  try {
    if (!rate) {
      throw new CustomizeError(401, 'Rate is required');
    }
    if (!orderId) {
      throw new CustomizeError(401, 'OrderId is required');
    }

    await Review.create({
      rate,
      orderId,
    });
    res.json({ status: 200 });
  } catch (err: any) {
    handleKnownExceptions(err, res);
  }
};

export default createReview;
