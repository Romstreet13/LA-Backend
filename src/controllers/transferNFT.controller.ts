import { Request, Response } from 'express';
import transferNFTService from '../services/transferNFT.service';

const getTransferNFT = async (req: Request, res: Response) => {
  const allTransferNFT = await transferNFTService.getAllTransferNFT();
  res.status(200).send(allTransferNFT);
};

export default {
  getTransferNFT,
};
