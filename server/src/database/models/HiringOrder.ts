import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

interface IHiringOrder extends Model {
  id?: number;
  userId: number;
  engId: number;
  status: string;
  description: string;
  price: number;
  reply?: string;
}

const HiringOrder = sequelize.define<IHiringOrder>(
  'hiringOrder',
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
    engId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reply: {
      type: DataTypes.STRING,
    },
  },
);

export default HiringOrder;
