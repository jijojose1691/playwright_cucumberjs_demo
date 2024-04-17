const { createLogger, format, transports } = require('winston');
const path = require('path');
const { PATHS } = require('./constants');
const LOG_LEVEL = 'info';
const fs = require('fs');
if (!fs.existsSync(PATHS.LOG_FILE_PATH)) {
    fs.mkdirSync(PATHS.LOG_FILE_PATH, { recursive: true });
}
const filename = path.join(PATHS.LOG_FILE_PATH, 'logger.log');

const logger = createLogger({
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [
        new transports.Console({
            level: LOG_LEVEL,
            format: format.combine(
                format.colorize(),
                format.printf(
                    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
                ),
            ),
        }),
        new transports.File({ filename }),
    ],
});

module.exports = logger;
