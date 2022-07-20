// @ts-nocheck
import db from '../db/connect';

// GET all IDs
const getAllNFTIDs = async () => await db.NFT.findAll();

// GET ID by transactionHash
const getNFTID = async data => {
  return await db.NFT.findAll({
    where: {
      transactionHash: data,
    },
  });
};

// POST
const createNFTID = async data => {
  try {
    const result = await db.NFT.create(data);
    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

export default {
  getAllNFTIDs,
  getNFTID,
  createNFTID,
};
