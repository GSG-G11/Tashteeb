import { Response } from 'express';

const handleKnownExceptions = (err: any, res: Response) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({ error: { message, statusCode } });
};
export default handleKnownExceptions;
