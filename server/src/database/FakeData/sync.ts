import sequelize, { User, Category, Product } from '..';
import { fakeUsers, fakeProducts, fakeCategories } from './fakeData';

const {
  env: { NODE_ENV },
} = process;
const buildFakeData = async () => {
  await sequelize.sync({ force: true });
  const dbData = await Promise.all([
    User.bulkCreate(fakeUsers),
    Category.bulkCreate(fakeCategories),
    Product.bulkCreate(fakeProducts),
  ]);
  dbData.forEach((data) => console.log(data));
};

if (NODE_ENV !== 'test') {
  buildFakeData();
}
