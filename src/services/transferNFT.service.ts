// @ts-nocheck
import db from '../db/connect';

const getTransferNFT = async () => await db.TransferNFT.findAll();

// const createTransferNFT = async data =>
//   await db.Test.bulkCreate(data, {
//     ignoreDuplicates: true,
//   });

export default {
  getTransferNFT,
  // createTransferNFT,
};
