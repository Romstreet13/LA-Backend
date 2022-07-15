// @ts-nocheck
import { Request, Response } from 'express';
import usersNFTsListService from '../services/usersNFTsList.service';

const getUsersNFTsList = async (req: Request, res: Response) => {
  const generalArray = await usersNFTsListService.getUsersNFTsList();
  const usersNFTsList = [];

  for (let i = 0; i < generalArray.length; i += 1)
    usersNFTsList.push({ [generalArray[i].user]: generalArray[i].tokenId });

  res.status(200).send(usersNFTsList);
};

export default {
  getUsersNFTsList,
};
