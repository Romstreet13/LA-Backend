// @ts-nocheck
import { la } from '../contracts/config';

export const userTokens = async account => {
  const _userTokens = await la.contract.methods.userTokens(account).call();
  return _userTokens;
};
