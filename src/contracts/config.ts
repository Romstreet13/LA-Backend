// @ts-nocheck
import Web3 from 'web3';
import { networks } from './networks';
import liquidAccessABIMumbai from './abis/liquidAccessABIMumbai.json';
import liquidAccessABIRopsten from './abis/liquidAccessABIRopsten.json';

const MUMBAI = new Web3(networks.mumbai);
const ROPSTEN = new Web3(networks.ropsten);

export const la_mumbai = {
  MUMBAI,
  abi: liquidAccessABIMumbai,
  contract: new MUMBAI.eth.Contract(
    liquidAccessABIMumbai,
    process.env.LA_CONTRACT_ADDRESS_MUMBAI
  ),
  privatKey: process.env.MASTER_WALLET_KEY,
  accounts: MUMBAI.eth.accounts.privateKeyToAccount(
    process.env.MASTER_WALLET_KEY
  ),
};

export const la_ropsten = {
  ROPSTEN,
  abi: liquidAccessABIRopsten,
  contract: new ROPSTEN.eth.Contract(
    liquidAccessABIRopsten,
    process.env.LA_CONTRACT_ADDRESS_ROPSTEN
  ),
  privatKey: process.env.MASTER_WALLET_KEY,
  accounts: ROPSTEN.eth.accounts.privateKeyToAccount(
    process.env.MASTER_WALLET_KEY
  ),
};
