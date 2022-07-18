// @ts-nocheck
import Web3 from 'web3';
import { networks } from './networks';
import liquidAccessABI from './abis/liquidAccessABI.json';

const MUMBAI = new Web3(networks.mumbai);

export const la = {
  MUMBAI,
  abi: liquidAccessABI,
  contract: new MUMBAI.eth.Contract(
    liquidAccessABI,
    process.env.LA_CONTRACT_ADDRESS
  ),
  privatKey: process.env.MASTER_WALLET_KEY,
  accounts: MUMBAI.eth.accounts.privateKeyToAccount(
    process.env.MASTER_WALLET_KEY
  ),
};
