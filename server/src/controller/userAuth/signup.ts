import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { sign, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../../database';
import CustomizeError from '../../error/customizeError';
import handleKnownExceptions from '../../error/handleKnownError';
import signupValidation from '../../validaiton';
import upload from '../../middlewares/cloudinary';

dotenv.config();

const { JWT_SECRET } = process.env;

const signup = async (req: Request, res: Response): Promise<any> => {
  try {
    await signupValidation(req);
    const {
      password, email, username, phone, role, bio, hourPrice,
    } = req.body;
    let image = req.body.image?.path;
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
    const hashedPassword: string = await bcrypt.hash(password, 10);
    if (image) {
      image = await upload(image, 'images');
    }
    const user = role === 1 ? await User.create({
      email,
      username,
      password: hashedPassword,
      image,
      phone,
      role,
      bio,
      hourPrice,
    }) : await User.create({
      email,
      username,
      password: hashedPassword,
      image,
      phone,
    });
    const token = sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET as Secret,
    );
    res.cookie('token', token).json({
      message: 'User created successfully!',
      user: {
        id: user.id, username: user.username, role: user.role, image: user.image,
      },
    });
  } catch (err: any) {
    if (err.details) {
      res.status(422).json({ message: err.message });
    } else {
      handleKnownExceptions(err, res);
    }
  }
};

export default signup;
