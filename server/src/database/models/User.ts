import {
  Model,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
} from 'sequelize';
import sequelize from '../config/connection';

interface IUser
  extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
  id?: number;
  email: string;
  user_name: string;
  password: string;
  image?: string;
  role?: number;
  cart_items?: object;
  hour_price?: number;
  phone?: string;
}

const User = sequelize.define<IUser>(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    cart_items: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    hour_price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  },
);

export default User;
console.log(User)