import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

interface IHiring_order extends Model {
  id: number;
  user_id: number;
  eng_id: number;
  status: string;
}

const HiringOrder = sequelize.define<IHiring_order>(
  'hiring_order',
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
    eng_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

export default HiringOrder;
