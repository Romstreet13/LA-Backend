// @ts-nocheck
import { Request, Response } from 'express';
import merchantListService from '../services/merchantList.service';

const getMerchantList = async (req: Request, res: Response) => {
  const generalArray = await merchantListService.getMerchantList();
  const merchantList = [];

  for (let i = 0; i < generalArray.length; i += 1)
    !merchantList.includes(generalArray[i].merchant) &&
      merchantList.push(generalArray[i].merchant);

  res.status(200).send(merchantList);
};

export default {
  getMerchantList,
};
