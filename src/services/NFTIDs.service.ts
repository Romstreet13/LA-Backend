// @ts-nocheck
import db from '../db/connect';

// GET all IDs
const getAllNFTIDs = async () => await db.NFTIDs.findAll();

// GET ID by transactionHash
const getNFTID = async data => {
  return await db.NFTIDs.findAll({
    where: {
      transactionHash: data,
    },
  });
};

// POST
const createNFTID = async data => {
  try {
    const result = await db.NFTIDs.create(data);
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
