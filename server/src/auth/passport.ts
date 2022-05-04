import dotenv from 'dotenv';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from '../database';

dotenv.config();
const {
  env: { JWT_SECRET },
} = process;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

export default (passport: any) => {
  passport.use(
    new Strategy(opts, async (jwtToken: any, done: any) => {
      try {
        const { id } = jwtToken;
        const user = await User.findByPk(id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    }),
  );
};
