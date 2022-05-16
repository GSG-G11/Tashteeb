import { Request, Response } from 'express';
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
      user: { id },
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
      attributes: ['id', 'name', 'email', 'phone', 'address', 'role'],
    });
    if (!eng) {
      throw new CustomizeError(404, 'Engineer not found');
    }
    const hOrder = await HiringOrder.create({
      ...req.body,
      engineerId: engId,
      userId: id,
    });
    res.status(201).json({
      message: 'Hiring order created successfully',
      data: hOrder,
    });
  } catch (err: any) {
    if (err.details) {
      res.status(422).json({ message: err.message });
    } else {
      handleKnownExceptions(err, res);
    }
  }
};
