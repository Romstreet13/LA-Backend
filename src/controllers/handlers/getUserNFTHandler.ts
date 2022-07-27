// @ts-nocheck
import mintNFTService from '../../services/mintNFT.service';

const getUserNFTHandler = async data => {
  const mintNFTs = await mintNFTService.getAllMintNFTs();
  const dataKeys = Object.keys(data);

  let userNFT = [];

  // GET by userAddress:
  if (dataKeys[0] === 'userAddress') {
    for (let i = 0; i < mintNFTs.length; i += 1) {
      mintNFTs[i].userAddress === data.userAddress &&
        userNFT.push({
          nftId: mintNFTs[i].nftId,
          merchant: mintNFTs[i].merchant,
          subscriptionId: mintNFTs[i].subscriptionId,
          userId: mintNFTs[i].userId,
          transactionHash: mintNFTs[i].transactionHash,
        });
    }
  }

  // GET by merchantId and userAddress:
  if ((dataKeys[0] === 'merchantId', dataKeys[1] === 'userAddress')) {
    for (let i = 0; i < mintNFTs.length; i += 1) {
      mintNFTs[i].merchantId === Number(data.merchantId) &&
        mintNFTs[i].userAddress === data.userAddress &&
        userNFT.push(mintNFTs[i]);
    }
  }

  // GET by merchantId and userId:
  if ((dataKeys[0] === 'userId', dataKeys[1] === 'merchantId')) {
    for (let i = 0; i < mintNFTs.length; i += 1) {
      mintNFTs[i].userId === Number(data.userId) &&
        mintNFTs[i].merchantId === Number(data.merchantId) &&
        userNFT.push({
          userAddress: mintNFTs[i].userAddress,
        });
    }
  }

  return userNFT;
};

export default getUserNFTHandler;
