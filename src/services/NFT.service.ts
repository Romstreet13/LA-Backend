// @ts-nocheck
import db from '../db/connect';

// GET all IDs
const getAllNFT = async () => await db.NFT.findAll();

// GET ID by transactionHash
const getNFT = async data => {
  return await db.NFT.findAll({
    where: {
      transactionHash: data,
    },
  });
};

// POST
const createNFT = async data => {
  try {
    const result = await db.NFT.create(data);
    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

export default {
  getAllNFT,
  getNFT,
  createNFT,
};
