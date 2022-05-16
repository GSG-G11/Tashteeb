import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/connection';

interface ICategory extends Model {
  id?: number;
  name: string;
  image: string;
}
const Category = sequelize.define<ICategory>('category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
});

export default Category;
