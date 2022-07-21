// @ts-nocheck
// import Web3 from 'web3';
import Web3 from 'web3';
import { networks } from '../contracts/networks';
import { la, la_ropsten } from '../contracts/config';

export const safeMint = async (userAddress, subscriptionId) => {
  console.log('safeMint run...');

  const BSC2 = new Web3(networks.bsc_main);

  const { BSC, contract, accounts } = la_ropsten;
  let txHash = '';

  try {
    BSC.eth.accounts.wallet.add(accounts);
    let gasPrice = await BSC.eth.getGasPrice();

    const result = await contract.methods
      .safeMint(userAddress, subscriptionId)
      .send({
        from: accounts.address,
        // gas: '100000000',
        // gasPrice: gasPrice,

        gas: 26600000,
        gasPrice: gasPrice,
        // gasPrice: BSC2.toWei('50', 'gwei'),
      })
      .on('transactionHash', async hash => {
        console.log(hash);
        txHash = hash;
      });

    return { result, txHash };
  } catch (err) {
    console.log('ERROR in transactions/index (safeMint):', err.message);

    if (err.message.includes('Invalid JSON RPC response')) {
      console.log('Invalid JSON RPC - txHash:', txHash);
      return 'Invalid JSON RPC response!';
    } else if (
      err.message.includes('Transaction has been reverted by the EVM')
    ) {
      return 'Transaction has been reverted by the EVM!';
    }
  }
};

/*
export const safeMint = async (userAddress, subscriptionId) => {
  console.log('safeMint run...');

  const { MUMBAI, contract, accounts } = la;
  let txHash = '';

  try {
    MUMBAI.eth.accounts.wallet.add(accounts);
    let gasPrice = await MUMBAI.eth.getGasPrice();

    const result = await contract.methods
      .safeMint(userAddress, subscriptionId)
      .send({
        from: accounts.address,
        gas: '10000000',
        gasPrice: gasPrice,
      })
      .on('transactionHash', async hash => {
        console.log(hash);
        txHash = hash;
      });

    return { result, txHash };
  } catch (err) {
    console.log('ERROR in transactions/index (safeMint):', err.message);

    if (err.message.includes('Invalid JSON RPC response')) {
      console.log('Invalid JSON RPC - txHash:', txHash);
      return 'Invalid JSON RPC response!';
    } else if (
      err.message.includes('Transaction has been reverted by the EVM')
    ) {
      return 'Transaction has been reverted by the EVM!';
    }
  }
};
*/
