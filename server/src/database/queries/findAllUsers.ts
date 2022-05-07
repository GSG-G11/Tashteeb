import { User } from '../models';

const findAllUsers = async () => {
  const allUsers = await User.findAll();
  console.log(allUsers, 1122);
};
export default findAllUsers;
