import { Request, Response } from 'express';

import { HiringOrder, User } from '../../database';
import handleKnownExceptions from '../../error/handleKnownError';

const getProducts = async (req: Request, res: Response) => {
  const {
    limit = 6,
    page = 1,
  }: any = req.query;

  try {
    const offset = (page - 1) * limit;

    const hiringOrders = await HiringOrder.findAndCountAll({
      include: [{ model: User, as: 'engHiringOrder', attributes: ['id', 'username'] }, { model: User, as: 'userHiringOrder', attributes: ['id', 'username'] }],
      limit,
      offset: offset > 0 ? offset : 0,
    });

    res.status(200).json({ messege: 'got all hiring orders successfully.', hiringOrders });
  } catch (error: any) {
    if (error.errors) {
      handleKnownExceptions(error, res);
    }
  }
};

export default getProducts;
