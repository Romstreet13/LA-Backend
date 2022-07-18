// @ts-nocheck
import mintNFTService from '../../services/mintNFT.service';

const getUserNFTHandler = async data => {
  const mintNFTs = await mintNFTService.getAllMintNFTs();
  let userNFT = [];

  for (let i = 0; i < mintNFTs.length; i += 1) {
    mintNFTs[i].userAddress === data.userAddress &&
      userNFT.push({
        merchant: mintNFTs[i].merchant,
        subscriptionId: mintNFTs[i].subscriptionId,
        userId: mintNFTs[i].userId,
        transactionHash: mintNFTs[i].transactionHash,
      });
  }

  return userNFT;
};

export default getUserNFTHandler;
