import { Response, Request } from 'express';
import { Order, Product, User } from '../../database';
import CustomizeError from '../../error/customizeError';
import handleUnknownExceptions from '../../error/handleUnkownError';

const getAllHiringOrders = async (req: Request, res: Response) => {
  try {
    const AllOrders = await Order.findAll({
      include: [
        {
          model: Product,
          attributes: ['name', 'price', 'description', 'categoryId', 'image'],
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    if (!AllOrders) {
      throw new CustomizeError(401, 'No orders to be found');
    }
    res.status(200).json({ status: 200, data: AllOrders });
  } catch (error: any) {
    handleUnknownExceptions(error, res);
  }
};

export default getAllHiringOrders;
