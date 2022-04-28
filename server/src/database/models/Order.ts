import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

interface IOrder extends Model {
  id: number;
  userId: number;
  totalPrice: number;
}

const Order = sequelize.define<IOrder>(
  'order',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
);

export default Order;
