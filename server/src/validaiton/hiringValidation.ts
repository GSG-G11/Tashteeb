import Joi from 'joi';

interface IHiringOrder {
    description: string;
    price: number;
}

const hiringValidation = (body: IHiringOrder) => {
  const schema = Joi.object({
    description: Joi.string().min(6).required(),
    price: Joi.number().required(),
  });
  return schema.validateAsync(body);
};

export default hiringValidation;
