import {
  sequelize, User, Category, Product, Order, ProductOrder,
} from '..';
import {
  fakeUsers, fakeProducts, fakeCategories, fakeOrders, fakeProductOrder,
} from './fakeData';

const {
  env: { NODE_ENV },
} = process;
const buildFakeData = async () => {
  try {
    await sequelize.sync({ force: true });
    await Category.bulkCreate(fakeCategories);
    await User.bulkCreate(fakeUsers);
    await Product.bulkCreate(fakeProducts);
    await Order.bulkCreate(fakeOrders);
    await ProductOrder.bulkCreate(fakeProductOrder);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

if (NODE_ENV !== 'test') {
  buildFakeData();
}

export default buildFakeData;
