import { Request, Response } from 'express';
import testService from '../services/test.service';

const getTestStats = async (req: Request, res: Response) => {
  const stats = await testService.getTestStats();
  res.status(200).send(stats);
};

export default {
  getTestStats,
};
