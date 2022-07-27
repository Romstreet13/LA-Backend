// @ts-nocheck
import getEvents from '../getEvents';
import { runCheckEvents } from '../../services/cron';
import { LABELS } from '../../constants';

const startServer = async () => {
  console.log(`running...`);

  eventHandler();
};

const eventHandler = async () => {
  // console.log(LABELS.length);

  const events = await getEvents();

  console.log('events:', events);

  for (let i = 0; LABELS.length > i; i += 1) {
    console.log('LABELS:', LABELS[i]);
    runCheckEvents(LABELS[0]);
  }
};

export default startServer;
