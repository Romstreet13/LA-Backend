// @ts-nocheck
import getStartBlock from './getStartBlock';
import transferNFTService from '../../services/transferNFT.service';
import getEvents from './getEvents';
import { cl } from '../../logger';

const checkEvents = async label => {
  cl.o(' - check transfers in DB:');
  const _NFTs = await transferNFTService.getAllTransferNFT();

  const lastCount = _NFTs.length === 0 ? 0 : _NFTs[_NFTs.length - 1].count;

  const startBlock = await getStartBlock(_NFTs);
  cl.o(' - transfers in DB:', _NFTs.length);
  // console.log('startBlock', startBlock);

  const newEvent =
    (await startBlock.length) !== 0
      ? await getEvents(startBlock, lastCount)
      : console.log('ERROR in checkEvents: no start block!');

  cl.mb(' - event:', newEvent);
};

export default checkEvents;
