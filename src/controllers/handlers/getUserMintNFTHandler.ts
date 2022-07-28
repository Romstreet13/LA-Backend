// @ts-nocheck
import mintNFTService from '../../services/mintNFT.service';

const getUserMintNFTHandler = async data => {
  const dataKeys = Object.keys(data);

  let userMintNFT = [];

  // GET mint by userAddress:
  if (dataKeys[0] === 'userAddress') {
    const userMintNft = await mintNFTService.getMintNFTByUserAddress(data);
    return userMintNft;
  }

  // GET mint by userId and userAddress:
  if (dataKeys[0] === 'userId' && dataKeys[1] === 'userAddress') {
    const userMintNft =
      await mintNFTService.getUserMintNFTByUserIdAndUserAddress(data);
    return userMintNft;
  }

  return userMintNFT;
};

export default getUserMintNFTHandler;
