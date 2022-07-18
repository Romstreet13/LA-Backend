// @ts-nocheck
import Web3 from 'web3';
import { networks } from './networks';
import snakeEggsShopABI from './abis/snakeEggsShopABI.json';

export const BSC_MAIN = new Web3(networks.bsc_main);

const testContract = new BSC_MAIN.eth.Contract(
  snakeEggsShopABI,
  '0x46Fa562b41C4e9c941b7b6B01C627C9feB825a3B'
);

export default {
  testContract,
};
