import { Request, Response } from 'express';
import transferNFTService from '../services/transferNFT.service';

const getTransferNFT = async (req: Request, res: Response) => {
  const transferNFT = await transferNFTService.getTransferNFT();
  res.status(200).send(transferNFT);
};

export default {
  getTransferNFT,
};
