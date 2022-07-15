// @ts-nocheck
import db from '../db/connect';
import logs from '../logs';

const getStartBlocks = async () => await db.StartBlock.findAll();

const getStartBlock = async label => {
  return await db.StartBlock.findAll({
    where: {
      label: label,
    },
  });
};

const createStartBlock = async (label, blockNumber) => {
  logs.service.createStartBlock(label, blockNumber);

  await db.StartBlock.create({
    label: label,
    blockNumber: blockNumber,
  });
};

const updateStartBlock = async (label, blockNumber) => {
  logs.service.updateStartBlock(label, blockNumber);

  await db.StartBlock.update(
    { blockNumber: blockNumber },
    { where: { label: label } }
  );
};

export default {
  getStartBlocks,
  getStartBlock,
  createStartBlock,
  updateStartBlock,
};
