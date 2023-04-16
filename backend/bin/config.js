const dotenv = require("dotenv");

dotenv.config();

const { PORT, OPEN_AI_API_KEY } = process.env;

module.exports = {
  PORT,
  OPEN_AI_API_KEY,
};
