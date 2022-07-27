// @ts-nocheck
// import { la_ropsten } from '../../contracts/config';
import getStartBlock from './getStartBlock';
import transferNFTService from '../../services/transferNFT.service';
import getEvents from './getEvents';

const checkEvents = async label => {
  // const { contract } = la_ropsten;

  console.log('- checkEvents label:', label);

  const _NFTs = await transferNFTService.getTransferNFT();

  const lastCount = _NFTs.length === 0 ? 0 : _NFTs[_NFTs.length - 1].count;

  const _startBlock = await getStartBlock();

  // const _startBlock = await contract.getPastEvents('OwnershipTransferred', {
  //   filter: { from: '0x0000000000000000000000000000000000000000' },
  //   fromBlock: 0,
  //   toBlock: 'latest',
  // });

  // console.log('_startBlock:', _startBlock);
  // console.log('_startBlock2:', _startBlock.length);

  _startBlock.length !== 0
    ? getEvents(_startBlock[0].blockNumber, lastCount)
    : console.log('ERROR in checkEvents: no start block!');
};

export default checkEvents;
