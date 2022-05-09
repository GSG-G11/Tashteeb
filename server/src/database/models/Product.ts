import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

interface IProduct extends Model {
  id: number;
  name: string;
  price: number;
  description: string;
  category_id: number;
  image: string;
}

const Product = sequelize.define<IProduct>('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  categoryId: {
    type: DataTypes.INTEGER,
  },
});

export default Product;
