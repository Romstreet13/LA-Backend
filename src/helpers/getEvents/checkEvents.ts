// @ts-nocheck
import getStartBlock from './getStartBlock';
import transferNFTService from '../../services/transferNFT.service';
import getEvents from './getEvents';

const checkEvents = async label => {
  const _NFTs = await transferNFTService.getAllTransferNFT();

  const lastCount = _NFTs.length === 0 ? 0 : _NFTs[_NFTs.length - 1].count;

  const _startBlock = await getStartBlock();

  _startBlock.length !== 0
    ? getEvents(_startBlock[0].blockNumber, lastCount)
    : console.log('ERROR in checkEvents: no start block!');
};

export default checkEvents;
