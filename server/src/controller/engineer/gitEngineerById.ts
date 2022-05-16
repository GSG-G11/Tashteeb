import { Request, Response } from 'express';
import { User } from '../../database';
import { ENGINEER } from '../../database/models/User';
import handleUnknownExceptions from '../../error/handleUnkownError';

const gitEngineerById = async (req: Request, res:Response) => {
  try {
    const { id } = req.params;
    const data = await User.findOne({ where: { role: ENGINEER, id } });
    res.json({ status: 200, user: data });
  } catch (err: any) {
    handleUnknownExceptions(err, res);
  }
};
export default gitEngineerById;
