// @ts-nocheck
import { safeMint } from '../write';
import mintNFTService from '../../services/mintNFT.service';
import NFTService from '../../services/NFT.service';
import { cl, log, createStartMintError, updateStatus } from '../../logger';

const safeMintHandler = async data => {
  cl.o(' -- checks NFT in db:');

  const _NFT = await mintNFTService.getUserMintNFTByUserIdAndUserAddress(data);

  let _nftId = 0;

  if (_NFT.length > 0) {
    log.error(
      'start mint error',
      createStartMintError({
        method: 'safeMint',
        status: 'start mint error',
        userId: data.userId,
        userAddress: data.userAddress,
        message: `NFT with this subscriptionId already exists`,
        isActivated: false,
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

  _nftId = allNFT.length === 0 ? 74 : allNFT[allNFT.length - 1].nftId + 1;

  // createNFT
  const _createdNFT = await NFTService.createNFT({
    nftId: _nftId,
    merchantId: data.merchantId,
    userAddress: data.userAddress,
    isActivated: true,
  });

  _createdNFT && cl.mb(' -- createNFT success');

  // createMintNFT
  const _response = await mintNFTService.createMintNFT({
    nftId: _nftId,
    userId: data.userId,
    userAddress: data.userAddress,
    status: 'success',
    transactionHash: result?.txHash,
  });

  _response && cl.mb(' -- createMintNFT success');

  log.info(
    'mint success',
    updateStatus({
      status: 'mint success',
      nftId: _response?.nftId,
      userId: data.userId,
      userAddress: data.userAddress,
      txHash: result?.txHash,
      isActivated: true,
    })
  );

  return _response;
};

export default safeMintHandler;
