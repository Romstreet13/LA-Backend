// @ts-nocheck
import { Request, Response } from 'express';
import NFTService from '../services/NFT.service';
import getUserNFTHandler from './handlers/getUserNFTHandler';

// GET all IDs
const getAllNFT = async (req: Request, res: Response) => {
  const allNFT = await NFTService.getAllNFT();
  res.status(200).send(allNFT);
};

// GET user NFT
const getUserNFT = async (req: Request, res: Response) => {
  const userNFT = await getUserNFTHandler(req.query);
  res.status(200).send(userNFT);
};

export default {
  getAllNFT,
  getUserNFT,
};
