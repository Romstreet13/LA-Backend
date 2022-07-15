// @ts-nocheck
import db from '../db/connect';

const getMerchantList = async () => await db.MintNFT.findAll();

// const createMerchantList = async data =>
//   await db.Test.bulkCreate(data, {
//     ignoreDuplicates: true,
//   });

export default {
  getMerchantList,
  // createMerchantList,
};
