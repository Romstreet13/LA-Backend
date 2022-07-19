// @ts-nocheck
import mintNFTService from '../../services/mintNFT.service';
import NFTIDsService from '../../services/NFTIDs.service';

const getUserNFTHandler = async data => {
  const mintNFTs = await mintNFTService.getAllMintNFTs();
  const keys = Object.keys(data);

  let userNFT = [];

  if (keys[0] === 'userAddress') {
    for (let i = 0; i < mintNFTs.length; i += 1) {
      const result = await NFTIDsService.getNFTID(mintNFTs[i].transactionHash);

      mintNFTs[i].userAddress === data.userAddress &&
        userNFT.push({
          nftId: result.length > 0 ? result[0]?.nftId : 'no id',
          merchant: mintNFTs[i].merchant,
          subscriptionId: mintNFTs[i].subscriptionId,
          userId: mintNFTs[i].userId,
          transactionHash: mintNFTs[i].transactionHash,
        });
    }
  }

  if (
    (keys[0] === 'userId', keys[1] === 'subscridtionId', keys[2] === 'merchant')
  ) {
    for (let i = 0; i < mintNFTs.length; i += 1) {
      mintNFTs[i].userId === Number(data.userId) &&
        mintNFTs[i].subscriptionId === Number(data.subscriptionId) &&
        mintNFTs[i].merchant === data.merchant &&
        userNFT.push({
          userAddress: mintNFTs[i].userAddress,
        });
    }
  }

  return userNFT;
};

export default getUserNFTHandler;
