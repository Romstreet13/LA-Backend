// @ts-nocheck
import { safeMint } from '../write';
import mintNFTService from '../../services/mintNFT.service';
import NFTService from '../../services/NFT.service';

const safeMintHandler = async data => {
  console.log(' - check NFT in db...');
  const _NFT = await mintNFTService.getNFT(data);

  let _nftId = 0;

  if (_NFT.length > 0 && _NFT[0].subscriptionId === data.subscriptionId) {
    return 'NFT with this subscriptionId already exists';
  }

  const result = await safeMint(data.userAddress, data.subscriptionId);

  console.log(' - got result from blockchain:', result);

  if (typeof result === 'string') return result;

  const allNFT = await NFTService.getAllNFT();

  _nftId = allNFT.length === 0 ? 131 : allNFT[allNFT.length - 1].nftId + 1;

  const _createdNFT = await NFTService.createNFT({
    nftId: _nftId,
    transactionHash: result?.txHash,
    userAddress: data.userAddress,
  });

  _createdNFT && console.log(' - createNFT done!');

  const _response = await mintNFTService.createMintNFT({
    nftId: _nftId,
    merchant: data?.merchant,
    subscriptionId: data.subscriptionId,
    userId: data.userId,
    userAddress: data.userAddress,
    status: 'success',
    transactionHash: result?.txHash,
  });

  _response && console.log(' - createMintNFT done!');

  const respons =
    typeof _response === 'string'
      ? _response
      : {
          nftId: _response?.nftId,
          merchant: _response.merchant,
          subscriptionId: _response.subscriptionId,
          userId: _response.userId,
        };

  console.log(' - send response to the controller');

  return respons;
};

export default safeMintHandler;
