// @ts-nocheck
import db from '../db/connect';
import { cl } from '../logger';

// GET all logs
const getAllLogs = async () => await db.Logs.findAll();

// POST start mint
const createStartMint = async data => {
  cl.mt(' * POST createStartMint log...');

  try {
    const result = await db.Logs.create(data);
    // console.log('data:', data); // *
    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

// POST start mint error
const createStartMintError = async data => {
  cl.mt(' * POST createStartMintError log...');

  try {
    const result = await db.Logs.create(data);
    // console.log('data:', data); // *
    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

// UPDATE hash and status
const updateTxHashAndStatus = async data => {
  cl.mt(' * UPDATE updateTxHashAndStatus log...');

  const { status, userId, userAddress, txHash } = data;
  // console.log('updateTxHashAndStatus:', status, userAddress, subscriptionId, txHash); // *
  await db.Logs.update(
    { status: status, transactionHash: txHash },
    { where: { userAddress: userAddress, userId: userId } }
  );
};

// UPDATE error message and status
const updateErrorMessageAndStatus = async data => {
  cl.mt(' * UPDATE updateErrorMessageAndStatus log...');

  const { status, userId, userAddress, message } = data;
  // console.log('updateErrorMessageAndStatus:', status, userAddress, subscriptionId, message); // *
  await db.Logs.update(
    { status: status, message: message },
    { where: { userId: userId, userAddress: userAddress } }
  );
};

// UPDATE status
const updateStatus = async data => {
  cl.mt(' * UPDATE updateStatus log...');

  const { status, userId, userAddress, nftId } = data;
  // console.log('updateStatus:', status, userAddress, subscriptionId, nftId); // *
  await db.Logs.update(
    { status: status, nftId: nftId, isActivated: true },
    { where: { userId: userId, userAddress: userAddress } }
  );
};

export default {
  getAllLogs,
  createStartMint,
  createStartMintError,
  updateTxHashAndStatus,
  updateErrorMessageAndStatus,
  updateStatus,
};
