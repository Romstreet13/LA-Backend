// @ts-nocheck
import { la_ropsten } from '../../contracts/config';

const getStartBlock = async allTransferNFT => {
  const { contract } = la_ropsten;

  let startBlock = 0;

  if (allTransferNFT.length !== 0) {
    startBlock = allTransferNFT[allTransferNFT.length - 1].blockNumber;
  } else {
    const ownershipTransferredEvent = await contract.getPastEvents(
      'OwnershipTransferred',
      {
        filter: { from: '0x0000000000000000000000000000000000000000' },
        fromBlock: 0,
        toBlock: 'latest',
      }
    );

    startBlock = ownershipTransferredEvent[0].blockNumber;
    console.log('OwnershipTransferred block:', startBlock);
  }

  console.log(' - startBlock', startBlock);

  return startBlock;
};

export default getStartBlock;
