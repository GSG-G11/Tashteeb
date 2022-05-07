import { User } from '../models';

const findUserByName = async (name : string) => {
  const userByName = await User.findOne({ where: { username: name } });
  console.log(userByName);
};

export default findUserByName;
