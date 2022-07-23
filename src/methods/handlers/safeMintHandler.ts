// @ts-nocheck
import { safeMint } from '../write';
import mintNFTService from '../../services/mintNFT.service';
import NFTService from '../../services/NFT.service';
import { cl, log, createStartMintError, updateStatus } from '../../logger';

const safeMintHandler = async data => {
  cl.o(' -- checks NFT in db:');
  const _NFT = await mintNFTService.getNFT(data);

  let _nftId = 0;

  if (_NFT.length > 0 && _NFT[0].subscriptionId === data.subscriptionId) {
    log.error(
      'start mint error',
      createStartMintError({
        status: 'start mint error',
        merchant: data.merchant,
        userId: data.userId,
        userAddress: data.userAddress,
        subscriptionId: data.subscriptionId,
        message: `NFT with this subscriptionId already exists`,
      })
    );
    return 'NFT with this subscriptionId already exists';
  }

  // safeMint
  const result = await safeMint(data);

  cl.w(
    ' -- got result from blockchain:',
    typeof result === 'string'
      ? result
      : result.txHash === result.result.transactionHash
  );

  if (typeof result === 'string') return result;

  const allNFT = await NFTService.getAllNFT();

  _nftId = allNFT.length === 0 ? 180 : allNFT[allNFT.length - 1].nftId + 1;

  // createNFT
  const _createdNFT = await NFTService.createNFT({
    nftId: _nftId,
    transactionHash: result?.txHash,
    userAddress: data.userAddress,
  });

  _createdNFT && cl.mb(' -- createNFT success');

  // createMintNFT
  const _response = await mintNFTService.createMintNFT({
    nftId: _nftId,
    merchant: data?.merchant,
    subscriptionId: data.subscriptionId,
    userId: data.userId,
    userAddress: data.userAddress,
    status: 'success',
    transactionHash: result?.txHash,
  });

  _response && cl.mb(' -- createMintNFT success');

  const respons =
    typeof _response === 'string'
      ? _response
      : {
          nftId: _response?.nftId,
          merchant: _response.merchant,
          subscriptionId: _response.subscriptionId,
          userId: _response.userId,
        };

  log.info(
    'mint success',
    updateStatus({
      status: 'mint success',
      userAddress: data.userAddress,
      subscriptionId: data.subscriptionId,
      txHash: result?.txHash,
      nftId: _response?.nftId,
    })
  );

  return respons;
};

export default safeMintHandler;
