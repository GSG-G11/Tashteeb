import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { sign, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../../database';

dotenv.config();

const { SECRET_KEY } = process.env;
const signUp = async (req: Request, res: Response) => {
  const {
    password, email, username,
  } = req.body;
  const emailDoesExist = await User.findOne({
    where: { email },
  });

  if (emailDoesExist) {
    res.status(409).json({ message: 'This email is already taken!' });
  }

  const userNameExists = await User.findOne({
    where: { username },
  });

  if (userNameExists) {
    res.status(409).json({ message: 'This user name is already taken!' });
  }
  const hashedPassword = bcrypt.hash(password, 10);
  const user = await User.create({
    ...req.body,
    password: hashedPassword,
  });
  res.status(201).json({ message: 'User created successfully!' });

  const token = sign(
    { id: user.id, username: user.username },
    SECRET_KEY as Secret,
    { expiresIn: '10h' },
  );
  res.cookie('token', token, { httpOnly: true }).json({ message: 'User created successfully!', user: { id: user.id, username: user.username } });
};

export default signUp;
