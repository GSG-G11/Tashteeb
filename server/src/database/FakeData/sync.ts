import {
  sequelize, User, Category, Product,
} from '..';
import { fakeUsers, fakeProducts, fakeCategories } from './fakeData';

const {
  env: { NODE_ENV },
} = process;
const buildFakeData = async () => {
  try {
    await sequelize.sync({ force: true });
    await Category.bulkCreate(fakeCategories);
    await User.bulkCreate(fakeUsers);
    await Product.bulkCreate(fakeProducts);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

if (NODE_ENV !== 'test') {
  buildFakeData();
}

export default buildFakeData;
