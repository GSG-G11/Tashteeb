import { Request, Response } from 'express';
import passport from '../../auth/passport';

const currentUser = (req: Request, res: Response) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ status: 'error', code: 'unauthorized err' });
    }
    if (!user) {
      return res.status(401).json({ status: 'error', code: 'unauthorized no user' });
    }
    const { id, username, role } = user;
    return res.status(200).json({
      status: 'success', id, username, role,
    });
  })(req, res);
};

export default currentUser;
