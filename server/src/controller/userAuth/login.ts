import { Request, Response } from 'express';
import { sign, Secret } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import dotenv from 'dotenv';
import signinValidation from '../../validaiton/signinValidation';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';
import { User } from '../../database';

dotenv.config();

const { JWT_SECRET, NODE_ENV } = process.env;

export default async (req: Request, res: Response) : Promise<any> => {
  try {
    const { email, password } = req.body;

    const { error } = await signinValidation(req.body);
    if (error) {
      throw new CustomizeError(400, error.details[0].message);
    }

    const account = await User.findOne({
      where: {
        email,
      },
    });
    if (!account) {
      throw new CustomizeError(409, 'Email does not exist');
    }
    const isPasswordValid: Boolean = await compare(password, account.password);
    if (!isPasswordValid) {
      throw new CustomizeError(401, 'Password is not valid');
    }
    const payload = {
      id: account.id,
      username: account.username,
      role: account.role,
    };
    const token = sign(payload, JWT_SECRET as Secret, { expiresIn: '10h' });
    res.cookie('token', token, { httpOnly: NODE_ENV === 'production' }).json({
      message: 'User logged in successfully!',
      user: { id: account.id, username: account.username, role: account.role },
    });
  } catch (err: any) {
    if (err.details) {
      res.status(422).json({ message: err.message });
    } else {
      handleKnownExceptions(err, res);
    }
  }
};
