// @ts-nocheck
import db from '../db/connect';

// GET all logs
const getAllLogs = async () => await db.Logs.findAll();

// POST start mint
const createStartMint = async data => {
  console.log(' - createStartMint run...');

  try {
    const result = await db.Logs.create(data);

    console.log('data:', data);

    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

// POST start mint error
const createStartMintError = async data => {
  console.log(' - createStartMintError run...');

  try {
    const result = await db.Logs.create(data);

    console.log('data:', data);

    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

// UPDATE hash and status
const updateTxHashAndStatus = async data => {
  const { status, userAddress, subscriptionId, txHash } = data;

  console.log('----->', status, userAddress, subscriptionId, txHash);

  await db.Logs.update(
    { status: status, transactionHash: txHash },
    { where: { userAddress: userAddress, subscriptionId: subscriptionId } }
  );
};

// UPDATE error message and status
const updateErrorMessageAndStatus = async data => {
  const { status, userAddress, subscriptionId, message } = data;

  console.log('----->', status, userAddress, subscriptionId, message);

  await db.Logs.update(
    { status: status, message: message },
    {
      where: {
        userAddress: userAddress,
        subscriptionId: subscriptionId,
      },
    }
  );
};

// UPDATE status
const updateStatus = async data => {
  const { status, userAddress, subscriptionId, nftId } = data;

  console.log('----->', status, userAddress, subscriptionId, nftId);

  await db.Logs.update(
    { status: status, nftId: nftId },
    {
      where: {
        userAddress: userAddress,
        subscriptionId: subscriptionId,
      },
    }
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
