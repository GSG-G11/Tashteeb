import Joi from 'joi';
import { Request } from 'express';

const reviewValidation = (req: Request) => {
  const schema = Joi.object({
    rate: Joi.number().min(1).max(5).required(),
    review: Joi.string().min(6).max(255).required(),
  });
  return schema.validateAsync(req.body);
};

export default reviewValidation;
