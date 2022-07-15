// @ts-nocheck
const reduceEvents = (events, config) => {
  const reducedEvents = [];

  switch (config.label) {
    case 'test_events':
      for (let i = 0; i <= events?.length; i += 1) {
        events[i] &&
          reducedEvents.push({
            transactionHash: events[i].transactionHash,
            blockNumber: events[i].blockNumber,
            eggId: events[i].returnValues.eggId,
            typeId: events[i].returnValues.typeId,
            token: events[i].returnValues.token,
            purchaseAmount: events[i].returnValues.purchaseAmount,
            purchaseTime: events[i].returnValues.purchaseTime,
          });
      }
      break;
    default:
      break;
  }

  return reducedEvents;
};

export default reduceEvents;
