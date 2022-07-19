// @ts-nocheck
import { safeMint } from '../write';
import mintNFTService from '../../services/mintNFT.service';
import NFTIDsService from '../../services/NFTIDs.service';

const safeMintHandler = async data => {
  // const result = { transactionHash: '0x3092e93befbca786c3...' }; // * test
  const result = await safeMint(data.userAddress, data.subscriptionId); // * dev

  if (typeof result === 'string') {
    return result;
  } else {
    const _response = await mintNFTService.createMintNFT({
      merchant: data.merchant,
      subscriptionId: data.subscriptionId,
      userId: data.userId,
      userAddress: data.userAddress,
      status: 'success',
      transactionHash: result?.txHash,
    });

    const allNFTIDs = await NFTIDsService.getAllNFTIDs();

    const NFTID = await NFTIDsService.createNFTID({
      nftId: allNFTIDs.length === 0 ? 1 : allNFTIDs.length + 1,
      transactionHash: result?.txHash,
      userAddress: data.userAddress,
    });

    const respons =
      typeof _response === 'string'
        ? _response
        : {
            nftId: NFTID.nftId,
            merchant: _response.merchant,
            subscriptionId: _response.subscriptionId,
            userId: _response.userId,
          };

    return respons;
  }
};

export default safeMintHandler;
