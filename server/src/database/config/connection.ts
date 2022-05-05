import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
  env: {
    NODE_ENV, DATABASE_URL, DEV_DB, TEST_DB,
  },
} = process;
let connectionString: string | undefined = '';
let ssl: boolean | object = false;

if (NODE_ENV === 'dev') {
  connectionString = DEV_DB;
} else if (NODE_ENV === 'production') {
  connectionString = DATABASE_URL;
  ssl = {
    rejectUnauthorized: false,
  };
} else {
  connectionString = TEST_DB;
}

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  dialectOptions: { ssl },
  logging: false,
});

export default sequelize;
