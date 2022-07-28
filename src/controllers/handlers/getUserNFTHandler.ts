// @ts-nocheck
import NFTService from '../../services/NFT.service';

const getUserNFTHandler = async data => {
  const dataKeys = Object.keys(data);

  // GET by merchantId and userId:
  if ((dataKeys[0] === 'merchantId', dataKeys[1] === 'userAddress')) {
    const userNft = await NFTService.getUserNFT(data);
    return userNft;
  }
};

export default getUserNFTHandler;
