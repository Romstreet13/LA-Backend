// @ts-nocheck
import mintNFTService from '../../services/mintNFT.service';

const getUserNFTHandler = async data => {
  const mintNFTs = await mintNFTService.getAllMintNFTs();
  let userNFT = [];

  for (let i = 0; i < mintNFTs.length; i += 1) {
    mintNFTs[i].userId === Number(data.userId) &&
      mintNFTs[i].merchant?.toLowerCase() === data.merchant?.toLowerCase() &&
      userNFT.push({
        merchant: mintNFTs[i].merchant,
        subscriptionId: mintNFTs[i].subscriptionId,
        userId: mintNFTs[i].userId,
      });
  }

  return userNFT;
};

export default getUserNFTHandler;
