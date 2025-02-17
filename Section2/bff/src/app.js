import config from './config'
// const { default: config } = require('./config');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const winston = require('winston');
const apiRoutes = require('./routes/api').default;

const appEnv = process.env.APP_ENV;
const nodeEnv = process.env.NODE_ENV;

let loadLocalEnv = false;

// // Configure logger
// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'combined.log' }),
//   ],
// });

// if (nodeEnv === 'development') {
//   logger.info('Loading local environment variables (.env)')
//   loadLocalEnv = true
// }

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

const port = process.env.PORT ?? config.port;
app.listen(port, () => {
//   logger.info(`Started on port ${port}`, { port })

    console.log(`Started on port ${port}`, { port });
})