// @ts-nocheck
import { la_mumbai, la_ropsten } from '../contracts/config';

// /* ROPSTEN
export const safeMint = async (userAddress, subscriptionId) => {
  console.log(' ');
  console.log(' - safeMint run...');

  const { ROPSTEN, contract, accounts } = la_ropsten;
  let txHash = '';

  try {
    ROPSTEN.eth.accounts.wallet.add(accounts);
    let gasPrice = await ROPSTEN.eth.getGasPrice();

    const result = await contract.methods
      .safeMint(userAddress, subscriptionId)
      .send({
        from: accounts.address,
        gas: 26600000,
        gasPrice: gasPrice,
      })
      .on('transactionHash', async hash => {
        console.log(' - txHash:', hash);
        console.log(' ');
        txHash = hash;
      });

    return { result, txHash };
  } catch (err) {
    console.log('ERROR in transactions/index (safeMint):', err.message);

    if (err.message.includes('Invalid JSON RPC response')) {
      return 'Invalid JSON RPC response!';
    } else if (err.message.includes('has been reverted by the EVM')) {
      return 'Transaction has been reverted by the EVM!';
    } else if (err.message.includes('Returned error: already known')) {
      return 'Returned error: already known!';
    } else return err.message;
  }
};
// */

/* MUMBAI
export const safeMint = async (userAddress, subscriptionId) => {
  console.log('safeMint run...');

  const { MUMBAI, contract, accounts } = la_mumbai;
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
    } else if (err.message.includes('has been reverted by the EVM')) {
      return 'Transaction has been reverted by the EVM!';
    } else return err.message
  }
};
*/
