// @ts-nocheck
import db from '../db/connect';
import { cl } from '../logger';

// GET all transfer NFT
const getAllTransferNFT = async () => await db.TransferNFT.findAll();

// POST
const createExistingTransferNFT = async data => {
  cl.mt(' * POST createExistingTransferNFT');

  const result = await db.TransferNFT.bulkCreate(data, {
    ignoreDuplicates: true,
  });

  return result;
};

// POST
const createTransferNFT = async data => {
  cl.mt(' * POST createTransferNFT');

  try {
    const result = await db.TransferNFT.create(data);
    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

export default {
  getAllTransferNFT,
  createExistingTransferNFT,
  createTransferNFT,
};
