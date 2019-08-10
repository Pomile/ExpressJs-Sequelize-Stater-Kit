import dotenv from 'dotenv';
import createdb from './createDb';

dotenv.config();

const dbName = process.env.NODE_ENV === 'production' ? process.env.DB_NAME : process.env.NODE_ENV === 'development' ? process.env.DEV_DB_NAME : process.env.CI_DB_NAME;
createdb(dbName);
