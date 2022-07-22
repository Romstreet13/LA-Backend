// @ts-nocheck
import db from '../db/connect';

// GET
const getAllMintNFTs = async () => await db.MintNFT.findAll();

// GET specific NFT by three values
const getNFT = async data => {
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
  console.log(' - createMintNFT run...');

  try {
    const result = await db.MintNFT.create(data);
    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

export default {
  getAllMintNFTs,
  getNFT,
  createMintNFT,
};
