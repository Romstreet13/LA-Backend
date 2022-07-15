// @ts-nocheck
import Web3 from 'web3';
import { networks } from '../../contracts/networks';
import liquidAccessABI from '../../contracts/abis/liquidAccessABI.json';
import contracts from '../../contracts';

const MUMBAI = new Web3(networks.mumbai);

const contract = new MUMBAI.eth.Contract(
  liquidAccessABI,
  process.env.LA_CONTRACT_ADDRESS
);

const accounts = MUMBAI.eth.accounts.privateKeyToAccount(
  process.env.MASTER_WALLET_KEY
);

export const config = {
  la: {
    MUMBAI,
    abi: liquidAccessABI,
    contract,
    privatKey: process.env.MASTER_WALLET_KEY,
    accounts,
  },
};
