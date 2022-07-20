// @ts-nocheck
import { safeMint } from '../write';
import mintNFTService from '../../services/mintNFT.service';
import NFTIDsService from '../../services/NFTIDs.service';

const safeMintHandler = async data => {
  const _specificNFT = await mintNFTService.getNFTID(data);

  console.log('_allNFTs:', _specificNFT);

  if (
    _specificNFT.length > 0 &&
    _specificNFT[0].subscriptionId === data.subscriptionId
  ) {
    return 'NFT with this subscriptionId already exists';
  }

  const result = await safeMint(data.userAddress, data.subscriptionId);

  let _NFTID = 0;

  console.log('data:', data);

  const allNFTIDs = await NFTIDsService.getAllNFTIDs();

  _NFTID =
    allNFTIDs.length === 0 ? 1 : allNFTIDs[allNFTIDs.length - 1].nftId + 1;

  NFTIDsService.createNFTID({
    nftId: _NFTID,
    transactionHash: result?.txHash,
    userAddress: data.userAddress,
  });

  if (typeof result === 'string') {
    return result;
  } else {
    const _response = await mintNFTService.createMintNFT({
      nftId: _NFTID,
      merchant: data.merchant,
      subscriptionId: data.subscriptionId,
      userId: data.userId,
      userAddress: data.userAddress,
      status: 'success',
      transactionHash: result?.txHash,
    });

    const respons =
      typeof _response === 'string'
        ? _response
        : {
            nftId: _response.nftId,
            merchant: _response.merchant,
            subscriptionId: _response.subscriptionId,
            userId: _response.userId,
          };

    return respons;
  }
};

export default safeMintHandler;
