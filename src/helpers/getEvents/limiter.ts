// @ts-nocheck
import configHandler from './configHandler';
import getInitialBlock from './getInitialBlock';
import { LIMIT_STEP } from '../../constants/index';
import { BSC_MAIN } from '../../contracts/index';
import getEvents from './getEvents';
import updateStartBlock from '../updateStartBlock';

const limiter = async config => {
  if (config) {
    const fromBlock = await getInitialBlock(config.label);
    const latestBlock = await BSC_MAIN.eth.getBlockNumber();
    const step = LIMIT_STEP;
    let result = [];
    let evs = [];
    let index = 0;

    const finalize = data => {
      data?.length &&
        updateStartBlock(config.label, data[data.length - 1].blockNumber);
      return data?.length ? [...result, ...data] : result;
    };

    for (let i = fromBlock; i < latestBlock + step; i += step) {
      evs = await getEvents(i, i + step, config);
      result = finalize(evs);
      index += 1;
    }

    result.length
      ? await config.service.create(result)
      : await updateStartBlock(config.label, latestBlock - 1000);

    return result;
  }
};

export default limiter;
