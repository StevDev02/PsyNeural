const { config } = require("dotenv");
config();

const CONF = {
  MONGODB_URI: process.env.STATE == "DEV" ? process.env.DEV_URI_DB : process.env.PROD_URI_DB,
  PORT: process.env.PORT,
  ADMIN_USER: process.env.STATE == "DEV"?process.env.ADMIN_USER:process.env.ADMIN_USER,
  LOCAL_ADMIN_USER: process.env.LOCAL_ADMIN_USER,
  JWT_SECRET: process.env.JWT_SECRET,
  SECRETDECRIPT: process.env.SECRETDECRIPT,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
}
module.exports = CONF