import { Request, Response } from 'express';
import startBlockService from '../services/startBlock.service';

const getStartBlocks = async (req: Request, res: Response) => {
  const blocks = await startBlockService.getStartBlocks();
  res.status(200).send(blocks);
};

export default {
  getStartBlocks,
};
