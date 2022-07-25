import { createLogger, format, transports } from 'winston';

const { combine, printf, colorize } = format;

const buildDevLogger = () => {
  const logFormat = printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`; // ${timestamp}
  });

  return createLogger({
    format: combine(colorize(), logFormat),
    transports: [new transports.Console()],
  });
};

export default buildDevLogger;

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     })
//   );
// }
