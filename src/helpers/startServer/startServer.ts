// @ts-nocheck
import { la_ropsten } from '../../contracts/config';
import { LABELS } from '../../constants';
import getMerchantInfo from './createMerchant';
import eventHandler from '../getEvents/eventHandler';

const startServer = async () => {
  console.log(`running...`);

  // Get or create current merchant
  await getMerchantInfo(la_ropsten); // *

  // Run the events checking
  await eventHandler(LABELS); // *
};

export default startServer;
