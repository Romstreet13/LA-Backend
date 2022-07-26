// @ts-nocheck
import getEvents from '../getEvents';
import { runCheckEvents } from '../../services/cron';

const startServer = async () => {
  console.log(`running...`);

  getEvents();

  runCheckEvents();
};

export default startServer;
