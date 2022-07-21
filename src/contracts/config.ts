// @ts-nocheck
import Web3 from 'web3';
import { networks } from './networks';
import liquidAccessABI from './abis/liquidAccessABI.json';
import liquidAccessABIRopsten from './abis/liquidAccessABIRopsten.json';

const MUMBAI = new Web3(networks.mumbai);
const BSC = new Web3(networks.ropsten);

export const la = {
  MUMBAI,
  abi: liquidAccessABI,
  contract: new MUMBAI.eth.Contract(
    liquidAccessABI,
    process.env.LA_CONTRACT_ADDRESS_MUMBAI
  ),
  privatKey: process.env.MASTER_WALLET_KEY,
  accounts: MUMBAI.eth.accounts.privateKeyToAccount(
    process.env.MASTER_WALLET_KEY
  ),
};

export const la_ropsten = {
  BSC,
  abi: liquidAccessABIRopsten,
  contract: new BSC.eth.Contract(
    liquidAccessABIRopsten,
    process.env.LA_CONTRACT_ADDRESS
  ),
  privatKey: process.env.MASTER_WALLET_KEY,
  accounts: BSC.eth.accounts.privateKeyToAccount(process.env.MASTER_WALLET_KEY),
};
