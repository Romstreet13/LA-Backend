// @ts-nocheck
import { la_ropsten } from '../../contracts/config';
import transferNFTService from '../../services/transferNFT.service';

const transferFromEvent = {
  from: '0xa080c64E6a2937B327b50B75B408FBD5C739FF2B',
  to: '0x9DE284E88cdEB9Fb4b1D38348ca70bEC098A4fAf',
  tokenId: 1,
  transactionHash:
    '0x16fa862cddd3719024e089e82b99f032252fe1b65f16e6420481b3367e5b99be',
};

const getEvents = async () => {
  const { ROPSTEN, contract } = la_ropsten;

  const chainId = await ROPSTEN.eth.getChainId();

  // const res = await transferNFTService.createTransferNFT(transferFromEvent);

  const event = await contract.getPastEvents('TransferFrom', {
    // filter: {
    //   from: [
    //     '0x9DE284E88cdEB9Fb4b1D38348ca70bEC098A4fAf',
    //     '0xa080c64e6a2937b327b50b75b408fbd5c739ff2b',
    //   ],
    // },
    fromBlock: 12667524,
    toBlock: 'latest',
  });

  console.log('getEvents:', event);
  console.log('chainId:', chainId);
};

export default getEvents;
