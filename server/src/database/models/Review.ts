import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

interface IReview extends Model {
  id: number;
  user_id: number;
  eng_id: number;
  review: string;
  rate: number;
}

const Review = sequelize.define<IReview>('review', {
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
  review: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Review;
