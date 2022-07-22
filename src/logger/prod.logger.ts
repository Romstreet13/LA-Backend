import { createLogger, format, transports } from 'winston';

const { combine, colorize, printf, json } = format;

const logFormat = printf(({ level, message }) => {
  return `${level}: ${message}`;
});

const buildProdLogger = () => {
  return createLogger({
    format: combine(colorize(), logFormat),
    // format: combine(json()),
    // defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
  });
};

export default buildProdLogger;
