import { Request, Response } from 'express';
import { User } from '../../database';
import { ENGINEER } from '../../database/models/User';
import handleUnknownExceptions from '../../error/handleUnkownError';

const getAllEngineer = async (req: Request, res:Response) => {
  try {
    // const { page, size } = req.query;
    const allEngineers = await User.findAndCountAll({
      where: { role: ENGINEER },
      limit: 9,
      // offset: size * page,
    });
    res.json({ status: 200, data: allEngineers });
  } catch (err:any) {
    handleUnknownExceptions(err, res);
  }
};
export default getAllEngineer;
