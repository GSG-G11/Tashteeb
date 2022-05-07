import { Category } from '../models';

const findByCategory = async (category:string) => {
  await Category.findAll({ where: { name: category } });
};
export default findByCategory;
