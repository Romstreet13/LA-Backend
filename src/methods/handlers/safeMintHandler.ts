// @ts-nocheck
import { safeMint } from '../write';
import mintNFTService from '../../services/mintNFT.service';

const safeMintHandler = async data => {
  // const result = { transactionHash: '0x3092e93befbca786c3...' }; // * test
  const result = await safeMint(data.userAddress, data.subscriptionId); // * dev

  if (typeof result === 'string') {
    return result;
  } else {
    const newNFT = {
      merchant: data.merchant,
      subscriptionId: data.subscriptionId,
      userId: data.userId,
      userAddress: data.userAddress,
      status: 'success',
      transactionHash: result?.transactionHash,
    };

    const _response = await mintNFTService.createMintNFT(newNFT);

    const respons =
      typeof _response === 'string'
        ? _response
        : {
            merchant: _response.merchant,
            subscriptionId: _response.subscriptionId,
            userId: _response.userId,
          };

    return respons;
  }
};

export default safeMintHandler;
