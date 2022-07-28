// @ts-nocheck
import { Request, Response } from 'express';
import merchantService from '../services/merchant.service';

// GET all merchants
const getAllMerchants = async (req: Request, res: Response) => {
  const allMerchants = await merchantService.getAllMerchants();
  res.status(200).send(allMerchants);
};

export default {
  getAllMerchants,
};
