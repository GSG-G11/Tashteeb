import { Request, Response } from 'express';
import { HiringOrder } from '../../database';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';

const deleteHO = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const hiringOrder = await HiringOrder.findByPk(id);
    if (!hiringOrder) {
      throw new CustomizeError(404, 'Hiring order not found!');
    }
    await hiringOrder.destroy();
    res.status(200).json({ message: 'Hiring order deleted' });
  } catch (err) {
    handleKnownExceptions(err, res);
  }
};

export default deleteHO;
