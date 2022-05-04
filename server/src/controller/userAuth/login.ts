import { Request, Response } from 'express';
import { sign, Secret } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import dotenv from 'dotenv';
// import CustomizeError from '../../error/customizeError';
// import handleKnownExceptions from '../../error/handleKnownError';
import { User } from '../../database';

dotenv.config();

const { JWT_SECRET, NODE_ENV } = process.env;

export default async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const account = await User.findOne({
      where: {
        email,
      },
    });
    if (!account) {
      throw new Error('Email does not exist');
    }
    const isPasswordValid: Boolean = await compare(password, account.password);
    if (!isPasswordValid) {
      throw new Error('Password is not valid');
    }
    const payload = {
      id: account.id,
      username: account.username,
      role: account.role,
    };
    const token = sign(payload, JWT_SECRET as Secret, { expiresIn: '10h' });
    res
      .cookie('token', token, { httpOnly: NODE_ENV === 'production' })
      .json({
        message: 'User logged in successfully!',
        user: { id: account.id, username: account.username },
      });
  } catch (error) {
    throw new Error(error);
  }
};
