// @ts-nocheck
import { la_mumbai, la_ropsten } from '../contracts/config';

export const userTokens = async account => {
  const _userTokens = await la_ropsten.contract.methods
    .userTokens(account)
    .call();
  return _userTokens;
};

/*
export const userTokens = async account => {
  const _userTokens = await la_mumbai.contract.methods.userTokens(account).call();
  return _userTokens;
};
*/
