// @ts-nocheck
import getExistingEvents from './getExistingEvents'; // *
import { runCheckEvents } from '../../services/cron';

const eventHandler = async LABELS => {
  /* Get existing events
  for (let i = 0; LABELS.length > i; i += 1) {
    await getExistingEvents(LABELS[i]);
  }
  */

  // Get new created events
  for (let i = 0; LABELS.length > i; i += 1) {
    runCheckEvents(LABELS[0]);
  }
};

export default eventHandler;
