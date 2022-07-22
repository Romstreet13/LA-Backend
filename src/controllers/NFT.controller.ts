// @ts-nocheck
import { Request, Response } from 'express';
import NFTService from '../services/NFT.service';

// GET all IDs
const getAllNFT = async (req: Request, res: Response) => {
  const allNFT = await NFTService.getAllNFT();
  res.status(200).send(allNFT);
};

export default {
  getAllNFT,
};
