import { Request, Response } from 'express';
import { User } from '../../database';
import { ENGINEER } from '../../database/models/User';
import handleUnknownExceptions from '../../error/handleUnkownError';

const getEngineer = async (req : Request, res : Response) => {
  try {
    const users = await User.findAll({ limit: 3, order: [['createdAt', 'DESC']], where: { role: ENGINEER } });
    res.json({ status: 200, data: users });
  } catch (err: any) {
    handleUnknownExceptions(err, res);
  }
};

export default getEngineer;
