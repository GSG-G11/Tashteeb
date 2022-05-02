import { Request, Response } from 'express';
import { User } from '../../database';

const signUp = async (req: Request, res: Response) => {
  const emailDoesExist = await User.findOne({
    where: { email: req.body.email },
  });

  if (emailDoesExist) {
    res.status(409).json({ message: 'This email is already taken!' });
  }

  const userNameExists = await User.findOne({
    where: { username: req.body.username },
  });

  if (userNameExists) {
    res.status(409).json({ message: 'This user name is already taken!' });
  }

  res.status(200).json({ message: 'succsesfull' });
};

export default signUp;
