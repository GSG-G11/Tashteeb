import { Response } from 'express';
import CustomizeError from './customizeError';
import handleKnownExceptions from './handleKnownError';
import handleUnknownExceptions from './handleUnkownError';

const customErrorHandler = (err: any, res: Response) => {
  // eslint-disable-next-line no-unused-expressions
  err instanceof CustomizeError
    ? handleKnownExceptions(err, res)
    : handleUnknownExceptions(err, res);
};

export default customErrorHandler;
