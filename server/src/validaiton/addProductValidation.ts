import { Request } from 'express';
import Joi from 'joi';

const addProductValidation = (req: Request) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(75).required(),
    image: Joi.string().min(6),
    price: Joi.number().required(),
    description: Joi.string().min(6).max(255).required(),
    categoryId: Joi.number().required(),
  });
  return schema.validateAsync(req.body);
};

export default addProductValidation;
