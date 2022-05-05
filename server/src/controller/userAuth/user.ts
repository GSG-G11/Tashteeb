import { Request, Response } from 'express';
import passport from 'passport';
import customPassport from '../../auth/passport';

customPassport(passport);
const currentUser = (req: Request, res: Response) => {
  passport.authenticate('jwt', (err, user, info) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ status: 'error', code: 'unauthorized' });
    }
    if (!user) {
      return res.status(401).json({ status: 'error', code: 'unauthorized' });
    }
    return info;
  })(req, res);
};

export default currentUser;
