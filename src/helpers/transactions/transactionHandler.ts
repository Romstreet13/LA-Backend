// @ts-nocheck
import { safeMint } from '../transactions';
import mintNFTService from '../../services/mintNFT.service';
// import accs from './userAccounts';

const transactionHandler = async data => {
  // console.log('data:', data);

  const result = await safeMint(data.userAddress, data.subscriptionId); // *

  // try {
  //   result = await safeMint(data.userAddress, data.subscriptionId); // *
  // } catch (err) {
  //   console.log('ERROR in transactionHandler (safeMint)', err.message);
  //   return err.message;
  // }

  if (typeof result === 'string') {
    return result;
  } else {
    const newNFT = {
      merchant: data.merchant,
      subscriptionId: data.subscriptionId,
      userId: data.userId,
      userAddress: data.userAddress,
      status: 'success',
      transactionHash: result?.transactionHash,
      // transactionHash:
      //   '0x3092e93befbca786c396f4f56d191ab8036ca7959b4212b3578d4a318af57ebb',
    };

    // console.log('result -->', result);
    // console.log('result transactionHash -->', result.transactionHash);

    const _response = await mintNFTService.createMintNFT(newNFT);

    console.log('_response ---->', typeof _response);

    const respons =
      typeof _response === 'string'
        ? _response
        : {
            merchant: _response.merchant,
            subscriptionId: _response.subscriptionId,
            userId: _response.userId,
          };

    // console.log('respons ---->', respons);

    return respons;
  }
};

export default transactionHandler;
