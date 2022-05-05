import {
  sequelize, User, Category, Product,
} from '..';
import { fakeUsers, fakeProducts, fakeCategories } from './fakeData';

const {
  env: { NODE_ENV },
} = process;
const buildFakeData = async () => {
  await sequelize.sync({ force: true });
  await Promise.all([
    User.bulkCreate(fakeUsers),
    Category.bulkCreate(fakeCategories),
    Product.bulkCreate(fakeProducts),
  ]);
};

if (NODE_ENV !== 'test') {
  buildFakeData();
}

export default buildFakeData;
