// @ts-nocheck
import { la_mumbai, la_ropsten } from '../contracts/config';
import {
  log,
  createStartMint,
  updateTxHashAndStatus,
  updateErrorMessageAndStatus,
} from '../logger';

// /* ROPSTEN
export const safeMint = async data => {
  console.log(' ');
  console.log(' - safeMint run...');

  const { merchant, userAddress, userId, subscriptionId } = data;

  const { ROPSTEN, contract, accounts } = la_ropsten;
  let txHash = '';

  try {
    log.info(
      ' * status: start mint',
      createStartMint({
        status: 'start mint',
        merchant: merchant,
        userId,
        userAddress,
        subscriptionId,
      })
    );

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
        log.info(
          ' * status: request to blockchain',
          updateTxHashAndStatus({
            status: 'request to blockchain',
            userAddress,
            subscriptionId,
            txHash,
          })
        );
      });

    return { result, txHash };
  } catch (err) {
    console.log('ERROR in transactions/index (safeMint):', err.message);

    let message = '';

    if (err.message.includes('Invalid JSON RPC response')) {
      message = 'Invalid JSON RPC response!';
    } else if (err.message.includes('has been reverted by the EVM')) {
      message = 'Transaction has been reverted by the EVM!';
    } else if (err.message.includes('Returned error: already known')) {
      message = 'Returned error: already known!';
    } else if (err.message.includes('invalid address')) {
      message = 'invalid address';
    } else message = err.message;

    log.info(
      ' * status: blockchain error',
      updateErrorMessageAndStatus({
        status: 'blockchain error',
        userAddress,
        subscriptionId,
        message: message.length < 50 ? message : `${message.slice(0, 50)}...`,
      })
    );

    return message.slice(0, 50);
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
