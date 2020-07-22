const dotenv = require('dotenv');

dotenv.config();

module.exports =  {
  PORT: process.env.EXPRESS_PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT: process.env.JWT,
  OUTLOOK_PORT: process.env.OUTLOOK_PORT,
  OUTLOOK_HOST: process.env.OUTLOOK_HOST,
  OUTLOOK_ADDRESS: process.env.OUTLOOK_ADDRESS,
  OUTLOOK_PASSWORD: process.env.OUTLOOK_PASSWORD,
  OUTLOOK_USERNAME: process.env.OUTLOOK_USERNAME
};