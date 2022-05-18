import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

interface IReview extends Model {
  id?: number;
  orderId: number;
  rate: number;
  review: string;
}

const Review = sequelize.define<IReview>('review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  review: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Review;
