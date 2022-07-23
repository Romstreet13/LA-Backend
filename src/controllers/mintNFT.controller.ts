// @ts-nocheck
import { Request, Response } from 'express';
import getUserNFTHandler from './handlers/getUserNFTHandler';
import mintNFTService from '../services/mintNFT.service';
import safeMintHandler from '../methods/handlers/safeMintHandler';
import { cl } from '../logger';

// GET all
const getAllMintNFTs = async (req: Request, res: Response) => {
  const mintNFTs = await mintNFTService.getAllMintNFTs();
  res.status(200).send(mintNFTs);
};

// GET specific
const getUserNFT = async (req: Request, res: Response) => {
  const userNFT = await getUserNFTHandler(req.query);
  res.status(200).send(userNFT);
};

// POST
const createMintNFT = async (req: Request, res: Response) => {
  cl.w(`=======> start mint NFT (subId: ${req.body.subscriptionId})`);
  const response = await safeMintHandler(req.body);
  cl.w(`<======= send response to front:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

export default {
  getAllMintNFTs,
  getUserNFT,
  createMintNFT,
};
