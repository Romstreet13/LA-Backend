// @ts-nocheck
import db from '../db/connect';

// GET
const getAllMintNFTs = async () => await db.MintNFT.findAll();

// GET NFT by three items
const getNFTID = async data => {
  return await db.MintNFT.findAll({
    where: {
      merchant: data.merchant,
      subscriptionId: data.subscriptionId,
      userAddress: data.userAddress,
    },
  });
};

// POST
const createMintNFT = async data => {
  try {
    const result = await db.MintNFT.create(data);
    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

export default {
  getAllMintNFTs,
  getNFTID,
  createMintNFT,
};
