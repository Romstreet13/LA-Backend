// @ts-nocheck
import db from '../db/connect';

const getUserNFTList = async () => await db.MintNFT.findAll();

// const createUserNFTList = async data =>
//   await db.Test.bulkCreate(data, {
//     ignoreDuplicates: true,
//   });

export default {
  getUserNFTList,
  // createUserNFTList,
};
