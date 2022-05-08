import Joi from 'joi';

interface SigninValidation {
  email: string;
  password: string;
}

const signinValidation = (body: SigninValidation) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).email()
      .required(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validateAsync(body);
};

export default signinValidation;
