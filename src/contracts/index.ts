// @ts-nocheck
import Web3 from 'web3';
import { networks } from './networks';
import liquidAccessABI from './abis/liquidAccessABI.json';
import snakeEggsShopABI from './abis/snakeEggsShopABI.json';

export const MUMBAI = new Web3(networks.mumbai);
export const BSC_MAIN = new Web3(networks.bsc_main);

const liquidAccessContract = new MUMBAI.eth.Contract(
  liquidAccessABI,
  '0xD630A43c80b8eDa9622d0980C268442d4066033F'
);

const testContract = new BSC_MAIN.eth.Contract(
  snakeEggsShopABI,
  '0x46Fa562b41C4e9c941b7b6B01C627C9feB825a3B'
);

export default {
  liquidAccessContract,
  testContract,
};
