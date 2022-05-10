import dotenv from 'dotenv';
import { Request } from 'express';
import passport from 'passport';

import { Strategy as JwtStartegy } from 'passport-jwt';
import { User } from '../database';

dotenv.config();
const {
  env: { JWT_SECRET },
} = process;

const cookieExtractor = (req: Request) => {
  let token = null;
  if (req?.cookies) token = req.cookies.token;
  return token;
};

const opts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: JWT_SECRET,
};

passport.use(
  new JwtStartegy(opts, (jwtToken: any, done: any) => {
    const { id } = jwtToken;
    User.findOne({
      where: {
        id,
      },
    })
      .then((user: any) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((error: Error) => done(error, false));
  }),
);

export default passport;
