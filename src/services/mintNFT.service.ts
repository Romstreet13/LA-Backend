// @ts-nocheck
import db from '../db/connect';

// GET
const getAllMintNFTs = async () => await db.MintNFT.findAll();

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
  createMintNFT,
};
