// @ts-nocheck
export let interval = null;
let count = 0;

export const waitForResponse = value => {
  interval = setInterval(() => {
    count !== value ? (count += 10) : clearInterval(interval);

    console.log(`waiting for blockchain response:`, count, `seconds`);
  }, 10000);
};
