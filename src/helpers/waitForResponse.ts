// @ts-nocheck
export let interval = null;
let count = 0;

export const waitForResponse = value => {
  count = value;

  interval = setInterval(() => {
    count !== 0 ? (count -= 10) : clearInterval(interval);

    console.log(`waiting for a response (${count} seconds left)`);
  }, 10000);
};
