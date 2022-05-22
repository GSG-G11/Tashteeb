import { Request } from 'express';
import Joi from 'joi';

const updateProductValidation = (req: Request) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(75),
    price: Joi.number().required(),
    description: Joi.string().min(6).max(255),
    categoryId: Joi.number(),
    image: Joi.string(),
  });
  return schema.validateAsync(req.body);
};

export default updateProductValidation;
