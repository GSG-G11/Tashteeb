import { Request, Response, NextFunction } from 'express';
import passport from '../auth/passport';
import CustomizeError from '../error/customizeError';
import handleKnownExceptions from '../error/handleKnownError';

const isEngineer = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    try {
      if (err) {
        throw new CustomizeError(401, 'unauthorized err');
      }
      if (!user) {
        throw new CustomizeError(401, 'unauthorized no user');
      }
      req.user = user;
      next();
    } catch (error) {
      handleKnownExceptions(error, res);
    }
  })(req, res);
};

export default isEngineer;
