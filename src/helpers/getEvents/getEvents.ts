// @ts-nocheck
import { la_ropsten } from '../../contracts/config';
import transferNFTService from '../../services/transferNFT.service';

const getEvents = async () => {
  const { ROPSTEN, contract } = la_ropsten;

  // const res = await transferNFTService.createTransferNFT(transferFromEvent);

  const event = await contract.getPastEvents('TransferFrom', {
    filter: {
      count: 1,
    },
    fromBlock: 12668769,
    toBlock: 'latest',
  });

  // console.log('getEvents:', event);

  const transferedNFT = {
    count: event[0].returnValues.count,
    from: event[0].returnValues.from,
    to: event[0].returnValues.to,
    blockNumber: event[0].blockNumber,
    tokenId: event[0].returnValues.tokenId,
    transactionHash: event[0].transactionHash,
    activated: false,
  };

  const res = await transferNFTService.createTransferNFT(transferedNFT);

  console.log('res:', res);
};

export default getEvents;
