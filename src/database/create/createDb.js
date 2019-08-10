import debug from 'debug';
import db from '../models';

const { sequelize } = db;
const createDb = async databaseName => sequelize.query(`CREATE DATABASE ${databaseName}`, { raw: true }).then(() => {
  debug.log(`Database ${databaseName} created`);
}).catch(err => debug.log(err.message));

export default createDb;
