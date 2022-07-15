// @ts-nocheck
import cron from 'node-cron';
import db from '../db/connect';
import logs from '../logs';
import startServer from '../helpers/startServer';
// import checkEvents from '../helpers/checkEvents'; // *

export const Cron = async values => {
  await dbSync(values);
  startServer();
};

const dbSync = async values => {
  await db.sequelize.sync();
  logs.fn.runServer(values);
};

// export const runCheckEvents = labels =>
// cron.schedule('*/35 * * * * *', () => checkEvents(labels)); // *

// */35 * * * * * - every 35 sec
// */10 * * * * - every 10 min
// */24 * * * - every 24 hours
