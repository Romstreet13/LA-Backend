// @ts-nocheck
import db from '../db/connect';
import { cl } from '../logger';

const getTransferNFT = async () => await db.TransferNFT.findAll();

const createTransferNFT = async data => {
  cl.mt(' * POST createTransferNFT');

  console.log('data:', data);

  // try {
  //   const result = await db.TransferNFT.create(data);
  //   return result.dataValues;
  // } catch (err) {
  //   return err.message;
  // }
};

export default {
  getTransferNFT,
  createTransferNFT,
};
