// @ts-nocheck
import configHandler from '../getEvents/configHandler';
import getEvents from '../getEvents';
import { runCheckEvents } from '../../services/cron';
import { LABELS } from '../../constants';
import logs from '../../logs';
import accs from '../transactions/userAccounts';

const labels = LABELS;

const startServer = async () => {
  liquidAccessTestCall();
  // runEventChecking(); // *
};

const liquidAccessTestCall = async () => {
  const config = configHandler(labels[1]);

  // const name = await config.contract.methods.name().call();
  // const totalSupply = await config.contract.methods.totalSupply().call();
  // const ownerAdrress = await config.contract.methods.owner().call();
  // const userBalance = await config.contract.methods.balanceOf(owner).call();
  // const merchantName = await config.contract.methods.merchantName().call();
  // const ownerOf = await config.contract.methods.ownerOf(1).call();
  const userTokens = await config.contract.methods
    .userTokens(accs.user8)
    .call();

  // const event = await config.contract.getPastEvents('SetBaseURI', {
  //   fromBlock: 27170955,
  //   toBlock: 27173781,
  // });

  // console.log('name:', name);
  // console.log('totalSupply:', totalSupply);
  // console.log('owner:', ownerAdrress);
  // console.log('userBalance:', userBalance);
  // console.log('merchantName:', merchantName);
  // console.log('ownerOf:', ownerOf);
  console.log('userTokens:', userTokens);
  // console.log('event:', event[0].returnValues);

  // console.log('mint:', mint);
};

// Start getting events
const runEventChecking = async () => {
  let events = [];
  let config = null;

  for (let i = 0; labels.length > i; i += 1) {
    config = configHandler(labels[i]);
    events = await getEvents(config);

    logs.fn.startServer(labels[i], events);
  }

  runCheckEvents(labels);
};

export default startServer;
