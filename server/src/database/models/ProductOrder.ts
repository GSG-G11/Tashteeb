import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/connection';

interface IProductOrder extends Model {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  subtotalPrice: number;
}

const ProductOrder = sequelize.define<IProductOrder>('productOrder', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subtotalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default ProductOrder;
