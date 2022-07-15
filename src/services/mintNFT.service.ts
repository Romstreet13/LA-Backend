// @ts-nocheck
import db from '../db/connect';

// GET
const getMintNFT = async () => await db.MintNFT.findAll();

// POST
const createMintNFT = async data => {
  console.log('data:', data);

  try {
    const result = await db.MintNFT.create(data);
    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

export default {
  getMintNFT,
  createMintNFT,
};
