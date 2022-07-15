// @ts-nocheck
import { Sequelize } from 'sequelize';
import MintNFT from '../models/MintNFT';
import TransferNFT from '../models/TransferNFT';
import StartBlock from '../models/StartBlock';
import Test from '../models/Test';

let db = {};

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

const Models = [MintNFT, TransferNFT, StartBlock, Test];

Models.forEach(model => {
  const seqModel = model(sequelize);
  db[seqModel.name] = seqModel;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
// ***
