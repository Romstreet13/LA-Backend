// @ts-nocheck
import startBlockService from '../../services/startBlock.service';
import { INITIAL_BLOCK } from '../../constants/index';
import logs from '../../logs';

const getInitialBlock = async label => {
  const block = await startBlockService.getStartBlock(label);

  block.length > 0 && logs.fn.initialBlock(label, block[0].blockNumber);

  return block.length > 0 ? block[0].blockNumber - 100 : INITIAL_BLOCK;
};

export default getInitialBlock;
