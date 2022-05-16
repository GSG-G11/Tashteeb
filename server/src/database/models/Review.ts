import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

interface IReview extends Model {
  id?: number;
  userId: number;
  engId: number;
  review: string;
  rate: number;
}

const Review = sequelize.define<IReview>('review', {
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
  review: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Review;
