import {
  User, HiringOrder, Category, Product, Order, Review,
} from './models';
import sequelize from './config/connection';

User.hasMany(Order);

User.hasMany(Review, {
  foreignKey: 'user_id',
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
  foreignKey: 'user_id',
  as: 'UserHire',
});
Category.hasMany(Product);

Product.belongsToMany(Order, { through: 'ProductOrder' });
Order.belongsToMany(Product, { through: 'ProductOrder' });

export {
  sequelize, Category, Product, User,
};
