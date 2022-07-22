// @ts-nocheck
import db from '../db/connect';

// GET all logs
const getAllLogs = async () => await db.Logs.findAll();

// POST
const createLog = async data => {
  console.log(' - createNFT run...');

  try {
    const result = await db.Logs.create(data);

    console.log('data:', data);

    return result.dataValues;
  } catch (err) {
    return err.message;
  }
};

const updateTxHash = async (userAddress, subscriptionId, txHash, status) => {
  await db.Logs.update(
    { transactionHash: txHash, status: status },
    { where: { userAddress: userAddress, subscriptionId: subscriptionId } }
  );
};

// const updateLog = async (label, blockNumber) => {
//   await db.StartBlock.update(
//     { blockNumber: blockNumber },
//     { where: { label: label } }
//   );
// };

export default {
  getAllLogs,
  createLog,
  updateTxHash,
};
