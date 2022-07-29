// @ts-nocheck
import { la_ropsten } from '../../contracts/config';
import transferNFTService from '../../services/transferNFT.service';

const getEvents = async (startBlock, lastCount) => {
  const { contract } = la_ropsten;
  const _count = Number(lastCount) + 1;

  // console.log(
  //   '- getEvents - startBlock and lastCount:',
  //   startBlock,
  //   Number(lastCount)
  // );

  // console.log('- getEvents _count:', _count);

  const event = await contract.getPastEvents('TransferFrom', {
    filter: {
      count: _count,
    },
    fromBlock: startBlock,
    toBlock: 'latest',
  });

  // console.log('- getEvents pastEvent:', event);

  if (event.length !== 0) {
    const transferedNFT = {
      count: event[0].returnValues.count,
      from: event[0].returnValues.from,
      to: event[0].returnValues.to,
      blockNumber: event[0].blockNumber,
      nftId: event[0].returnValues.tokenId,
      transactionHash: event[0].transactionHash,
    };

    const res = await transferNFTService.createTransferNFT(transferedNFT);

    return res;
  } else return 'no new trasfersFrom events!';
};

export default getEvents;
