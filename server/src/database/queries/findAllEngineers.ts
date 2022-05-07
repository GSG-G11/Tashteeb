import { User } from '../models';

const findAllEngineersQuery = async () => {
  await User.findAll({ where: { role: 2 } });
};

export default findAllEngineersQuery;
