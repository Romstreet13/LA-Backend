// @ts-nocheck
import config from './config';

export const safeMint = async (userAddress, subscriptionId) => {
  console.log('safeMint run...');

  const { MUMBAI, contract, accounts } = config.la;

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
      });

    console.log('safeMint transactions result:', result);

    return result;
  } catch (err) {
    console.log('ERROR in transactions/index (safeMint):', err.message);

    if (err.message.includes('Invalid JSON RPC response')) {
      return 'Invalid JSON RPC response!';
    } else if (
      err.message.includes('Transaction has been reverted by the EVM')
    ) {
      return 'Transaction has been reverted by the EVM!';
    }
  }
};
