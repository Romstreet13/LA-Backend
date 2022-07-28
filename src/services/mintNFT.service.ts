// @ts-nocheck
import db from '../db/connect';
import { cl } from '../logger';

// GET
const getAllMintNFTs = async () => await db.MintNFT.findAll();

// GET user mint NFT by userId and userAddress
const getUserMintNFT = async data => {
  return await db.MintNFT.findAll({
    where: {
      userId: data.userId,
      userAddress: data.userAddress,
    },
  });
};

// GET user mint NFT by userAddress
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
  getUserMintNFT,
  getMintNFTByUserAddress,
  createMintNFT,
};
