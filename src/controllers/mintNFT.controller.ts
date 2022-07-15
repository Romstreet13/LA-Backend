// @ts-nocheck
import { Request, Response } from 'express';
import mintNFTService from '../services/mintNFT.service';
import transactionHandler from '../helpers/transactions/transactionHandler';

const getMintNFT = async (req: Request, res: Response) => {
  const mintNFTs = await mintNFTService.getMintNFT();
  res.status(200).send(mintNFTs);
};

const createMintNFT = async (req: Request, res: Response) => {
  const response = await transactionHandler(req.body);
  console.log('controller:', response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
  // res.status(200).send('create mint');
};

export default {
  getMintNFT,
  createMintNFT,
};
