// @ts-nocheck
import { la_ropsten } from '../../contracts/config';
import { LABELS } from '../../constants';
import getMerchantInfo from './createMerchant';
import eventHandler from '../getEvents/eventHandler';
// import getExistingEvents from '../getEvents/getExistingEvents';
// import getEvents from '../getEvents';
// import { runCheckEvents } from '../../services/cron';

const startServer = async () => {
  console.log(`running...`);

  // Get or create current merchant
  await getMerchantInfo(la_ropsten); // *

  // Run the events checking
  await eventHandler(LABELS); // *
};

// const eventHandler = async () => {
//   // Get existing events
//   for (let i = 0; LABELS.length > i; i += 1) {
//     const existingEvents = await getExistingEvents(LABELS[i]);
//     console.log('startServer existingEvents:', existingEvents.length);
//   }

//   // Get new created events
//   for (let i = 0; LABELS.length > i; i += 1) {
//     runCheckEvents(LABELS[0]);
//   }
// };

export default startServer;
