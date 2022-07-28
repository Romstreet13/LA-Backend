// @ts-nocheck
import { la_ropsten } from '../../contracts/config';
import getMerchantInfo from './getMerchantInfo';

const startServer = async () => {
  // Get or create current merchant
  await getMerchantInfo(la_ropsten);
};

export default startServer;
