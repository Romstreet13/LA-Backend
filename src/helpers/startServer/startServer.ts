// @ts-nocheck
import { la_ropsten } from '../../contracts/config';
import getMerchantInfo from './createMerchant';
import getExistingEvents from '../getEvents/getExistingEvents';
// import getEvents from '../getEvents';
import { runCheckEvents } from '../../services/cron';
import { LABELS } from '../../constants';

const startServer = async () => {
  console.log(`running...`);

  // Get or create current merchant
  await getMerchantInfo(la_ropsten);

  // Run the events checking
  eventHandler();
};

const eventHandler = async () => {
  for (let i = 0; LABELS.length > i; i += 1) {
    const existingEvents = await getExistingEvents(LABELS[i]);
    console.log('existingEvents:', existingEvents.length);
  }

  for (let i = 0; LABELS.length > i; i += 1) {
    runCheckEvents(LABELS[0]);
  }
};

export default startServer;
