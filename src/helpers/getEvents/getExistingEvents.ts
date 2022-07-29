// @ts-nocheck
import transferNFTService from '../../services/transferNFT.service';
import getStartBlock from './getStartBlock';
import { la_ropsten } from '../../contracts/config';

const getExistingEvents = async label => {
  const { contract } = la_ropsten;

  const _NFTs = await transferNFTService.getAllTransferNFT();

  const _startBlock = await getStartBlock(_NFTs);
  // const startBlock = _startBlock[0].blockNumber;

  const _events = await contract.getPastEvents('TransferFrom', {
    fromBlock: _startBlock,
    toBlock: 'latest',
  });

  console.log(' - eventHandler!');

  const events = [];

  for (let i = 0; _events.length > i; i += 1) {
    events.push({
      count: _events[i].returnValues.count,
      from: _events[i].returnValues.from,
      to: _events[i].returnValues.to,
      blockNumber: _events[i].blockNumber,
      nftId: _events[i].returnValues.tokenId,
      transactionHash: _events[i].transactionHash,
    });
  }

  const existingEvents = await transferNFTService.createExistingTransferNFT(
    events
  );

  return existingEvents;
};

export default getExistingEvents;
