import { Response, Request } from 'express';
import { Order } from '../../database';
import handleKnownExceptions from '../../error/handleKnownError';
import CustomizeError from '../../error/customizeError';

const getAllHiringOrders = async (req: Request, res: Response) => {
  try {
    const AllOrders = await Order.findAll();
    if (!AllOrders) {
      throw new CustomizeError(401, 'No hiring orders to be found');
    }
    res.status(200).json({ status: 200, data: AllOrders });
  } catch (error :any) {
    handleKnownExceptions(error, res);
  }
};

export default getAllHiringOrders;
