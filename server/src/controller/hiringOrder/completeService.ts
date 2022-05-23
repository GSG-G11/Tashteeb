import { Request, Response } from 'express';
import twilio from '../../utils/twilio';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';
import { HiringOrder, User } from '../../database';

interface IReqUser extends Request {
  user?: any;
}

export default async (req: IReqUser, res: Response) => {
  try {
    const {
      user: { id, username },
    } = req; // Engineer ID
    const hiringOrderID = +req.params.id;

    if (!hiringOrderID) {
      throw new CustomizeError(400, 'Invalid hiring order id');
    }
    const hiringOrder = await HiringOrder.findOne({
      where: { id: hiringOrderID },
    });
    if (!hiringOrder) {
      throw new CustomizeError(404, 'Hiring order not found');
    }
    if (hiringOrder.engId !== id) {
      throw new CustomizeError(403, 'You are not allowed to do this');
    }

    hiringOrder.status = 'completed';
    await hiringOrder.save();
    const user = await User.findByPk(hiringOrder.userId, {
      attributes: ['id', 'username', 'phone'],
    });
    if (!user) {
      throw new CustomizeError(404, 'User not found');
    }
    const messege = await twilio(
      user.phone,
      `Hi ${user.username},
Engineer ${username} has completed your hiring order.
Tash6eeb team.`,
    );

    res.status(200).json({
      message: 'Hiring order updated successfully',
      data: hiringOrder,
      messege,
    });
  } catch (err: any) {
    if (err.details) {
      res.status(422).json({ message: err.message });
    } else {
      handleKnownExceptions(err, res);
    }
  }
};
