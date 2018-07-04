const Dotenv = require("dotenv");
let envPath = `./.${process.env.APP_ENV}.env`;
Dotenv.config({ path: envPath, silent: true });

module.exports = {};