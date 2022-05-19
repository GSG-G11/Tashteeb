import { Request, Response } from 'express';
import { HiringOrder, Review } from '../../database';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';
import reviewValidation from '../../validaiton/review';

interface IReqUser extends Request {
  user?: any;
}
const createReview = async (req: IReqUser, res: Response) => {
  const {
    rate, review,
  }: any = req.body;
  const { orderId } = req.params;
  const {
    user: { id },
  } = req;
  const hiringOrderID = +req.params.id;
  try {
    await reviewValidation(req);

    if (!rate) {
      throw new CustomizeError(401, 'Rate is required');
    }
    if (!orderId) {
      throw new CustomizeError(401, 'OrderId is required');
    }

    const hiringOrder = await HiringOrder.findOne({
      where: {
        id: hiringOrderID,
      },
    });
    if (!hiringOrder) {
      throw new CustomizeError(401, 'Order not found');
    }
    if (hiringOrder.userId !== id) {
      throw new CustomizeError(401, 'You are not allowed to review this order');
    }

    const checkReview = await Review.findOne({
      where: {
        orderId: hiringOrderID,
      },
    });
    if (checkReview) {
      throw new CustomizeError(401, 'You have reviewed this order');
    }
    await Review.create({
      rate,
      review,
      orderId,
    });
    res.json({ status: 200 });
  } catch (err: any) {
    if (err.details) {
      res.status(422).json({ message: err.message });
    } else {
      handleKnownExceptions(err, res);
    }
  }
};

export default createReview;
