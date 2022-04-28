import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

interface IOrder extends Model {
  id: number;
  user_id: number;
  total_price: number;
}

const order = sequelize.define<IOrder>(
  'order',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
);

export default order;
