// @ts-nocheck
import db from '../db/connect';
import { cl } from '../logger';

// GET
const getAllMintNFTs = async () => await db.MintNFT.findAll();

// GET specific NFT by three values
const getNFT = async data => {
  return await db.MintNFT.findAll({
    where: {
      userId: data.userId,
      // merchantId: data.merchantId, // *
      // userAddress: data.userAddress, // *
    },
  });
};

// GET mint NFT by userAddress
const getMintNFTByUserAddress = async data => {
  return await db.MintNFT.findAll({
    where: {
      userAddress: data.userAddress,
    },
  });
};

// POST
const createMintNFT = async data => {
  cl.o(' * POST createMintNFT...');

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
  getMintNFTByUserAddress,
  createMintNFT,
};
