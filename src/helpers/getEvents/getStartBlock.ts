import { la_ropsten } from '../../contracts/config';

const getStartBlock = async () => {
  const { contract } = la_ropsten;

  return await contract.getPastEvents('OwnershipTransferred', {
    filter: { from: '0x0000000000000000000000000000000000000000' },
    fromBlock: 0,
    toBlock: 'latest',
  });
};

export default getStartBlock;
