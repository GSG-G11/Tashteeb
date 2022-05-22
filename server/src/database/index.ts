import {
  User, HiringOrder, Category, Product, Order, Review, ProductOrder,
} from './models';
import sequelize from './config/connection';

// User and Order relationship
User.hasMany(Order);
Order.belongsTo(User);

// User has Many Reviews
User.hasMany(Review, {
  foreignKey: 'userId',
  as: 'userReview',
});

// Engineer has Many Reviews
User.hasMany(Review, {
  foreignKey: 'engId',
  as: 'engReview',
});

// Engineer has Many HiringOrder
HiringOrder.belongsTo(User, {
  foreignKey: 'engId',
  as: 'engHiringOrder',
});

// User has Many HiringOrder
HiringOrder.belongsTo(User, {
  foreignKey: 'userId',
  as: 'userHiringOrder',
});

// product and category relationship
Category.hasMany(Product);
Product.belongsTo(Category);

// product and order relationship
Product.belongsToMany(Order, { through: ProductOrder });
Order.belongsToMany(Product, { through: ProductOrder });

export {
  sequelize, User, HiringOrder, Category, Product, Order, Review, ProductOrder,
};
