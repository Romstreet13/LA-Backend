// @ts-nocheck
import db from '../db/connect';
import { cl } from '../logger';

// GET all IDs
const getAllNFT = async () => await db.NFT.findAll();

// GET ID by transactionHash
// const getNFT = async data => {
//   console.log(' * GET NFT (check in db)');

//   return await db.NFT.findAll({
//     where: {
//       transactionHash: data,
//     },
//   });
// };

// POST
const createNFT = async data => {
  cl.mt(' * POST createNFT');

  try {
    const result = await db.NFT.create(data);
    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

export default {
  getAllNFT,
  // getNFT,
  createNFT,
};
