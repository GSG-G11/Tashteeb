import { Response, Request } from 'express';
import { HiringOrder } from '../../database';
import handleKnownExceptions from '../../error/handleKnownError';
import CustomizeError from '../../error/customizeError';

const getAllHiringOrders = async (req: Request, res: Response) => {
  try {
    const hiringOrders = await HiringOrder.findAll();
    if (!hiringOrders) {
      throw new CustomizeError(401, 'No hiring orders to be found');
    }
    res.status(200).json({ data: hiringOrders });
  } catch (error :any) {
    handleKnownExceptions(error, res);
  }
};

export default getAllHiringOrders;
