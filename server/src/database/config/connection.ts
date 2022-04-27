import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
  env: { NODE_ENV, DATABASE_URL, DEV_DB },
} = process;
let connectionString: string | undefined;
let ssl: boolean | object = false;
switch (NODE_ENV) {
  case 'production':
    connectionString = DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
    break;
  default:
    connectionString = DEV_DB;
}
if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

export default new Sequelize(connectionString, {
  dialect: 'postgres',
  dialectOptions: { ssl },
  logging: false,
});
