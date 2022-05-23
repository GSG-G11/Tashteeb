import { Request, Response } from 'express';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';
import { User, HiringOrder } from '../../database';

interface IReqUser extends Request {
  user?: any;
}

export default async (req: IReqUser, res: Response) => {
  try {
    const {
      user: { id },
    } = req; // User ID
    const userHiringOrder = await HiringOrder.findAll({
      where: { engId: id },
      include: { model: User, as: 'userHiringOrder', attributes: ['id', 'username', 'phone'] },
    });
    if (!userHiringOrder) {
      throw new CustomizeError(404, 'No hiring order found');
    }
    res.status(200).json({
      message: 'Hiring order found successfully',
      userHiringOrder,
    });
  } catch (err: any) {
    handleKnownExceptions(err, res);
  }
};
