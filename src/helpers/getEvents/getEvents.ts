// @ts-nocheck
import reduceEvents from './reduceHandler';
import logs from '../../logs/logs';

const getEvents = async (limitedFrom: number, limitedTo: number, config) => {
  let count = 0;
  let rawEvents = [];

  if (config) {
    try {
      rawEvents = await config.contract.getPastEvents(config.event, {
        fromBlock: limitedFrom,
        toBlock: limitedTo,
      });

      count = 0;

      const events = rawEvents.length && reduceEvents(rawEvents, config);

      events.length && config && (await config.service.create(events));
      events.length && logs.fn.getEvents(config.label, events);

      return events;
    } catch (err) {
      logs.err.getEvents(err, config);

      count += 1;

      if (count >= 25) {
        count = 0;
        throw new Error('--> Too many failed in getEvents: count', count); // *
      } else await getEvents(limitedFrom, limitedTo);
    }
  }
};

export default getEvents;

/*
filter: {
  typeId: '5',
},
*/
