// @ts-nocheck
import { Request, Response } from 'express';
import { userTokens } from '../methods/read';
import getUserNFTHandler from './handlers/getUserNFTHandler';
import accs from '../helpers/userAccounts';
import mintNFTService from '../services/mintNFT.service';
import safeMintHandler from '../methods/handlers/safeMintHandler';

// userTokens (read method)
const checkAndShowUserTokens = async () => {
  const userTokens = await userTokens(accs.owner);
  const userNFT = await getUserNFTHandler({ userId: '1', merchant: 'netflix' });
  console.log('userTokens:', userTokens);
  console.log('userNFT:', userNFT);
};

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
  console.log(' ');
  console.log(`===> create NFT run... (subId: ${req.body.subscriptionId})`);

  const response = await safeMintHandler(req.body);

  console.log(' - got response from safeMintHandler:', response);
  console.log(' send request to front ===>');

  // setTimeout(() => checkAndShowUserTokens(), 3000); // *

  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

export default {
  getAllMintNFTs,
  getUserNFT,
  createMintNFT,
};
