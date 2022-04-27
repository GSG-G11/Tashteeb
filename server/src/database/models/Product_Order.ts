import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/connection';

interface IProductOrder extends Model {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  subtotal_price: number;
}

const ProductOrder = sequelize.define<IProductOrder>('productOrder', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subtotal_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default ProductOrder;
