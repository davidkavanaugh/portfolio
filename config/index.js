const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.EXPRESS_PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT: process.env.JWT,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  EMAIL_USERNAME: process.env.EMAIL_USERNAME,
};
