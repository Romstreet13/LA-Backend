// @ts-nocheck
import configHandler from '../getEvents/configHandler';
import getEvents from '../getEvents';
import logs from '../../logs';

const checkEvents = async labels => {
  let config = null;

  for (let i = 0; labels.length > i; i += 1) {
    config = configHandler(labels[i]);
    const events = config && (await getEvents(config));

    logs.fn.checkEvents(labels[i], events);
  }
};

export default checkEvents;
