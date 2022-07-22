// @ts-nocheck
import devLogger from './dev.logger';
import prodLogger from './prod.logger';
import logService from '../services/logs.service';

export let log =
  process.env.NODE_ENV === 'develop' ? devLogger() : prodLogger();

export const save = data => {
  console.log('data:', data);
  logService.createLog(data);
};

export const updateTxHash = (userAddress, subscriptionId, hash) => {
  console.log('data:', userAddress, subscriptionId, hash);
  logService.updateTxHash(userAddress, subscriptionId, hash, 'blockchain');
};

/* example:

import { log, save } from '../../logger';

log.info('text info!', save(111));
log.info('text info!', updateTxHash(111));
log.warn('text warn!', { meta1: 'meta1' }, save(222));
log.error('text error!', save(333));

*/
