// @ts-nocheck
import { safeMint } from '../write';
import mintNFTService from '../../services/mintNFT.service';
import NFTService from '../../services/NFT.service';

const safeMintHandler = async data => {
  const _NFT = await mintNFTService.getNFT(data);

  let _NFTID = 0;

  if (_NFT.length > 0 && _NFT[0].subscriptionId === data.subscriptionId) {
    return 'NFT with this subscriptionId already exists';
  }

  const result = await safeMint(data.userAddress, data.subscriptionId);

  const allNFT = await NFTService.getAllNFT();

  if (typeof result === 'string') return result;

  _NFTID = allNFT.length === 0 ? 131 : allNFT[allNFT.length - 1].nftId + 1;

  NFTService.createNFT({
    nftId: _NFTID,
    transactionHash: result?.txHash,
    userAddress: data.userAddress,
  });

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
};

export default safeMintHandler;
