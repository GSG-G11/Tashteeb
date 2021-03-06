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
  username: string;
  password: string;
  image?: string;
  role?: number;
  hourPrice?: number;
  phone: string;
  bio?: string;
}
const USER : number = 0;
const ENGINEER :number = 1;
const ADMIN :number = 2;
const User = sequelize.define<IUser>('users', {
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
  username: {
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
    defaultValue: USER,
  },
  hourPrice: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  phone: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  bio: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
});
export { USER, ENGINEER, ADMIN };
export default User;
