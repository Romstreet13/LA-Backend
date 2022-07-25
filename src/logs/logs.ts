// @ts-nocheck
const { log } = console;

const logs = {
  err: {
    getEvents: (err, config) =>
      log(`▒▒ ERROR in getEvents: ${err?.message} (${config?.label})`),
  },
  service: {
    createStartBlock: (label, blockNumber) =>
      log('• --> create startBlock:', blockNumber, `(${label})`),
    updateStartBlock: (label, blockNumber) =>
      log('• --> update startBlock:', blockNumber, `(${label})`),
  },
  fn: {
    runServer: ({ host, port }) => {
      log(``);
      log(`  server ★(◔.◔)★ http://${host}:${port}  `);
      log(``);
    },
    initialBlock: (label, block) => log(`--> initBlock:`, block, `(${label})`),
    getEvents: (label, events) => log(`--> got:`, events.length, `(${label})`),
    startServer: (label, events) =>
      log(`* --> startServer:`, events.length, `(${label})`),
    checkEvents: (label, events) =>
      log(`** --> checkEvents:`, events.length, `(${label})`),
  },
};

export default logs;
