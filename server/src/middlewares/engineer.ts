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

      if (user.role === 1) {
        req.user = user;
        next();
      } else {
        throw new CustomizeError(401, 'unauthorized not an engineer');
      }
    } catch (error) {
      handleKnownExceptions(error, res);
    }
  })(req, res);
};

export default isEngineer;
