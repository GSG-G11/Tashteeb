import { Response } from 'express';

const handleUnknownExceptions = (err: any, res: Response) => {
  res.status(500).json({ error: { message: 'Something went wrong.' } });
};

export default handleUnknownExceptions;
