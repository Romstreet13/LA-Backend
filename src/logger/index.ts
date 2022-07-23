// @ts-nocheck
import devLogger from './dev.logger';
import prodLogger from './prod.logger';
import logService from '../services/logs.service';

export let log =
  process.env.NODE_ENV === 'develop' ? devLogger() : prodLogger();

export const createStartMint = data => {
  console.log('createStartMint data:', data);
  logService.createStartMint(data);
};

export const createStartMintError = data => {
  console.log('createStartMintError data:', data);
  logService.createStartMintError(data);
};

export const updateTxHashAndStatus = data => {
  console.log('updateTxHashAndStatus data:', data);
  logService.updateTxHashAndStatus(data);
};

export const updateErrorMessageAndStatus = data => {
  console.log('updateErrorMessageAndStatus data:', data);
  logService.updateErrorMessageAndStatus(data);
};

export const updateStatus = data => {
  console.log('updateStatus data:', data);
  logService.updateStatus(data);
};

/* example:

import { log, save } from '../../logger';

log.info('text info!', save(111));
log.info('text info!', updateTxHash(111));
log.warn('text warn!', { meta1: 'meta1' }, save(222));
log.error('text error!', save(333));

*/
