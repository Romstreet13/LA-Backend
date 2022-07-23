// @ts-nocheck
import { la_mumbai, la_ropsten } from '../contracts/config';
import {
  cl,
  log,
  createStartMint,
  updateTxHashAndStatus,
  updateErrorMessageAndStatus,
} from '../logger';

// /* ROPSTEN
export const safeMint = async data => {
  cl.mt(' --- write safeMint');

  const { merchant, userAddress, userId, subscriptionId } = data;
  const { ROPSTEN, contract, accounts } = la_ropsten;
  let txHash = '';

  try {
    log.info(
      'start mint',
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

    // Request to blockchain
    const result = await contract.methods
      .safeMint(userAddress, subscriptionId)
      .send({
        from: accounts.address,
        gas: 26600000,
        gasPrice: gasPrice,
      })
      .on('transactionHash', async hash => {
        txHash = hash;
        cl.mt(' --- txHash:', hash);

        log.info(
          'request to blockchain',
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
    cl.mt(' --- ERROR in transactions/index (safeMint):', err.message);

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

    log.error(
      'blockchain error',
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
