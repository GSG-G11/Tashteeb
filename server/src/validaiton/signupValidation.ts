import { Request } from 'express';
import Joi from 'joi';

const signupValidation = (req : Request) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required()
      .email(),
    username: Joi.string().min(4).max(255).required(),
    password: Joi.string().min(6).max(255).required(),
    image: Joi.string(),
    role: Joi.number().min(0).max(2),
    bio: Joi.string(),
    hourPrice: Joi.number().min(0),
    phone: Joi.string().min(6).max(255),
  });
  return schema.validateAsync(req.body);
};

export default signupValidation;
