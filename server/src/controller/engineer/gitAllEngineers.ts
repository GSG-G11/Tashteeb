import { Request, Response } from 'express';
import { User } from '../../database';
import { ENGINEER } from '../../database/models/User';
import handleUnknownExceptions from '../../error/handleUnkownError';

const getAllEngineer = async (req: Request, res:Response) => {
  try {
    const { page = 1, pageSize = 6 } = req.query;
    const offset = +pageSize * (+page - 1);
    const allEngineers = await User.findAndCountAll({
      where: { role: ENGINEER },
      limit: +pageSize,
      offset: offset > 0 ? offset : 0,
    });
    res.json({ status: 200, data: allEngineers, message: 'success get all engineer' });
  } catch (err:any) {
    handleUnknownExceptions(err, res);
  }
};
export default getAllEngineer;
