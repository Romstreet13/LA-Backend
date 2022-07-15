// @ts-nocheck
import db from '../db/connect';

const getUsersNFTsList = async () => await db.MintNFT.findAll();

// const createUsersNFTsList = async data =>
//   await db.Test.bulkCreate(data, {
//     ignoreDuplicates: true,
//   });

export default {
  getUsersNFTsList,
  // createUsersNFTsList,
};
