import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { sign, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../../database';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';
import signupValidation from '../../validaiton';

dotenv.config();

const { SECRET_KEY } = process.env;

const signUp = async (req: Request, res: Response) => {
  try {
    await signupValidation(req);
    const {
      password, email, username,
    } = req.body;
    const emailDoesExist = await User.findOne({
      where: { email },
    });

    if (emailDoesExist) {
      throw new CustomizeError(409, 'This email is already taken!');
    }

    const userNameExists = await User.findOne({
      where: { username },
    });

    if (userNameExists) {
      throw new CustomizeError(409, 'This username is already taken!');
    }
    const hashedPassword : string = await bcrypt.hash(password, 10);
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    const token = sign(
      { id: user.id, username: user.username },
    SECRET_KEY as Secret,
    { expiresIn: '10h' },
    );
    res.cookie('token', token, { httpOnly: true }).json({ message: 'User created successfully!', user: { id: user.id, username: user.username } });
  } catch (err : any) {
    if (err.details) {
      res.status(422).json({ message: err.message });
    } else {
      handleKnownExceptions(err, res);
    }
  }
};

export default signUp;
