import { Request, Response } from 'express';

const signUp = (req: Request, res: Response) => {
  res.status(200).json({ message: 'succsesfull' });
};

export default signUp;
