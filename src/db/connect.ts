// @ts-nocheck
import { Sequelize } from 'sequelize';
import MintNFT from '../models/MintNFT';
// import NFTIDs from '../models/NFTIDs';
import TransferNFT from '../models/TransferNFT';
import StartBlock from '../models/StartBlock';
import Test from '../models/Test';

let db = {};

const uri =
  'postgres://wgfdqmwiwkykek:03e396aeabcb331f419ea54ec8abfd6aa616a9654d4ccc9bd98e945f550affb2@ec2-54-228-32-29.eu-west-1.compute.amazonaws.com:5432/d4a1s14vvt808v';

/* Postgres
export const sequelize = new Sequelize({
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: 5432,
  dialect: 'postgres',
  query: {
    raw: true,
  },
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 20,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
});
*/

// /* Heroku
export const sequelize = new Sequelize(uri, {
  // username: process.env.LA_HEROKU_POSTGRES_USER,
  // password: process.env.LA_HEROKU_POSTGRES_PASSWORD,
  // database: process.env.LA_HEROKU_POSTGRES_DB,
  // host: process.env.LA_HEROKU_POSTGRES_HOST || 'localhost',
  // port: 5432,
  // dialect: 'postgres',
  query: {
    raw: true,
  },
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 20,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
// */

const Models = [MintNFT, TransferNFT, StartBlock, Test];

Models.forEach(model => {
  const seqModel = model(sequelize);
  db[seqModel.name] = seqModel;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
// ***
