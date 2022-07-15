// @ts-nocheck
import contracts from '../../contracts';
import snakeEggsShopService from '../../services/test.service';

let config = {};

const configHandler = label => {
  switch (label) {
    case 'liquid_access_events':
      config = {
        label: label,
        service: {
          create: 'no method in configHandler switch!!!',
        },
        contract: contracts.liquidAccessContract,
        event: 'SafeMint',
      };
      break;

    case 'test_events':
      config = {
        label: label,
        service: {
          create: snakeEggsShopService.createTestStats,
        },
        contract: contracts.testContract,
        event: 'BuyEgg',
      };
      break;

    default:
      break;
  }

  return config;
};

export default configHandler;
