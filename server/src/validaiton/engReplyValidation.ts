import Joi from 'joi';

interface IHiringOrder {
    acceptance: boolean;
    reply: string;
}

const hiringValidation = (body: IHiringOrder) => {
  const schema = Joi.object({
    acceptance: Joi.boolean().required(),
    reply: Joi.string().min(6).required(),
  });
  return schema.validateAsync(body);
};

export default hiringValidation;
