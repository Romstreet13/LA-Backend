// @ts-nocheck
import devLogger from './dev.logger';
import prodLogger from './prod.logger';
import logService from '../services/logs.service';
import * as _cl from './logMargins';

export const cl = _cl;

export let log =
  process.env.NODE_ENV === 'develop' ? devLogger() : prodLogger();

export const createStartMint = data => {
  cl.mt('winston createStartMint data:', data);
  logService.createStartMint(data);
};

export const createStartMintError = data => {
  cl.mt('winston createStartMintError data:', data);
  logService.createStartMintError(data);
};

export const updateTxHashAndStatus = data => {
  cl.mt('winston updateTxHashAndStatus data:', data);
  logService.updateTxHashAndStatus(data);
};

export const updateErrorMessageAndStatus = data => {
  cl.mt('winston updateErrorMessageAndStatus data:', data);
  logService.updateErrorMessageAndStatus(data);
};

export const updateStatus = data => {
  cl.o('winston updateStatus data:', data);
  logService.updateStatus(data);
};
