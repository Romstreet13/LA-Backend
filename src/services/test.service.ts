// @ts-nocheck
import db from '../db/connect';

const getTestStats = async () => await db.Test.findAll();

const createTestStats = async data =>
  await db.Test.bulkCreate(data, {
    ignoreDuplicates: true,
  });

export default {
  getTestStats,
  createTestStats,
};
