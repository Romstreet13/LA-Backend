// @ts-nocheck
import db from '../db/connect';

// GET all IDs
const getAllNFTIDs = async () => await db.NFTIDs.findAll();

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
  createNFTID,
};
