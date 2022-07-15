// @ts-nocheck
import { Request, Response } from 'express';
import userNFTListService from '../services/userNFTList.service';

const getUserNFTList = async (req: Request, res: Response) => {
  const _user = req.query.user;
  const generalArray = await userNFTListService.getUserNFTList();
  const userNFTList = [];

  for (let i = 0; i < generalArray.length; i += 1)
    generalArray[i].user === _user &&
      userNFTList.push({ [generalArray[i].user]: generalArray[i].tokenId });

  res.status(200).send(userNFTList);
};

export default {
  getUserNFTList,
};
