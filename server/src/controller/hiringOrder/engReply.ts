import { Request, Response } from 'express';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';
import { HiringOrder } from '../../database';
import engReplyValidation from '../../validaiton/engReplyValidation';

interface IReqUser extends Request {
  user?: any;
}

export default async (req: IReqUser, res: Response) => {
  try {
    const { error } = await engReplyValidation(req.body);
    if (error) {
      throw new CustomizeError(400, error.details[0].message);
    }

    const { reply, acceptance } = req.body;
    const {
      user: { id },
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

    hiringOrder.status = acceptance ? 'accepted' : 'rejected';
    hiringOrder.reply = reply;
    await hiringOrder.save();
    res.status(200).json({
      message: 'Hiring order updated successfully',
      data: hiringOrder,
    });
  } catch (err: any) {
    if (err.details) {
      res.status(422).json({ message: err.message });
    } else {
      handleKnownExceptions(err, res);
    }
  }
};
