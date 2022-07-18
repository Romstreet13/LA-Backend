// @ts-nocheck
import db from '../db/connect';

// GET
const getAllMintNFTs = async () => await db.MintNFT_dev.findAll();

// POST
const createMintNFT = async data => {
  try {
    const result = await db.MintNFT_dev.create(data);
    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

export default {
  getAllMintNFTs,
  createMintNFT,
};
