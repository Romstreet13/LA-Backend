// @ts-nocheck
import { Request, Response } from 'express';
import { userTokens } from '../methods/read';
import getUserNFTHandler from './handlers/getUserNFTHandler';
import accs from '../helpers/userAccounts';
import mintNFTService from '../services/mintNFT.service';
import safeMintHandler from '../methods/handlers/safeMintHandler';

// userTokens (read method)
const checkAndShowUserTokens = async () => {
  console.log('userTokens:', await userTokens(accs.owner));
  console.log(
    'userNFT:',
    await getUserNFTHandler({ userId: '1', merchant: 'netflix' })
  );
};

// GET all
const getAllMintNFTs = async (req: Request, res: Response) => {
  const mintNFTs = await mintNFTService.getAllMintNFTs();
  res.status(200).send(mintNFTs);
};

// GET specific
const getUserNFT = async (req: Request, res: Response) => {
  const userNFT = await getUserNFTHandler(req.query);
  // console.log('controller userNFT:', userNFT);
  res.status(200).send(userNFT);
};

// POST
const createMintNFT = async (req: Request, res: Response) => {
  const response = await safeMintHandler(req.body);
  // console.log('controller:', response);
  // setTimeout(() => checkAndShowUserTokens(), 3000);

  console.log(' - got response fom safeMintHandler!');
  console.log(' - send request to front...');

  res.status(typeof response === 'string' ? 400 : 200).send(response);
  // res.status(200).send('create mint');
};

export default {
  getAllMintNFTs,
  getUserNFT,
  createMintNFT,
};
