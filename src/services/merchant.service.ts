// @ts-nocheck
import db from '../db/connect';
import { cl } from '../logger';

// GET all merchants
const getAllMerchants = async () => await db.Merchant.findAll();

// GET specific merchant
const getMerchant = async data => {
  console.log(' * GET current merchant (check in db)');

  const merchant = await db.Merchant.findAll({
    where: {
      merchantId: data.merchantId,
      merchantName: data.merchantName,
      merchantUrl: data.merchantUrl,
    },
  });
  return merchant;
};

// POST
const createMerchant = async data => {
  cl.mt(' * POST createMerchant');

  try {
    const result = await db.Merchant.create(data);
    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

export default {
  getAllMerchants,
  getMerchant,
  createMerchant,
};
