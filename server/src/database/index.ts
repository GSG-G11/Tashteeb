import {
  User, HiringOrder, Category, Product, ProductOrder, Order, Review,
} from './models';
import sequelize from './config/connection';

User.hasMany(Order);

User.hasMany(Review, {
  foreignKey: 'User_id',
  as: 'UserReview',
});
User.hasMany(Review, {
  foreignKey: 'eng_id',
  as: 'engReview',
});
HiringOrder.hasMany(User, {
  foreignKey: 'eng_id',
  as: 'engHire',
});
HiringOrder.hasMany(User, {
  foreignKey: 'User_id',
  as: 'UserHire',
});
Category.hasMany(Product, {
  foreignKey: 'Product_id',
});
Product.hasMany(ProductOrder, {
  foreignKey: 'Order_id',
});

Product.belongsToMany(Order, { through: 'ProductOrder' });
Order.belongsToMany(Product, { through: 'ProductOrder' });

HiringOrder.belongsToMany(User, { through: 'HiringOrder' });
User.belongsToMany(HiringOrder, { through: 'HiringOrder' });

export default sequelize;
export { Category, Product, User };
