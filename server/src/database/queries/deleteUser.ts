import { User } from '../models';

const deleteUser = async (name : string) => {
  await User.destroy({ where: { username: name } });
};

export default deleteUser;
