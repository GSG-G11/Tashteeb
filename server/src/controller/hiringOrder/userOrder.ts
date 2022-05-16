import { Request, Response } from 'express';
import twilio from '../../utils/twilio';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';
import { User, HiringOrder } from '../../database';
import hiringValidation from '../../validaiton/hiringValidation';

interface IReqUser extends Request {
  user?: any;
}

export default async (req: IReqUser, res: Response) => {
  try {
    const {
      user: { id, username },
    } = req; // User ID

    const { error } = await hiringValidation(req.body);
    if (error) {
      throw new CustomizeError(400, error.details[0].message);
    }

    const engId = +req.params.id;
    if (!engId) {
      throw new CustomizeError(400, 'Invalid engineer id');
    }

    const eng = await User.findOne({
      where: { id: engId, role: 1 },
      attributes: ['id', 'username', 'phone'],
    });
    if (!eng) {
      throw new CustomizeError(404, 'Engineer not found');
    }
    const hiringOrder = await HiringOrder.create({
      ...req.body,
      engId,
      userId: id,
    });
    if (!hiringOrder) {
      throw new CustomizeError(500, 'Internal server error');
    }
    const messege = await twilio(
      eng.phone,
      `Hi ${eng.username},
you have a new hiring order from ${username}
check it out on https://hiring-order.herokuapp.com/hiring-order/${hiringOrder.id}. 
Tash6eeb team.`,
    );

    res.status(201).json({
      message: 'Hiring order created successfully',
      hiringOrder,
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
