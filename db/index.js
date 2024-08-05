const mongoose = require("mongoose");
const CONF = require("../config");

const connectDB = async () => {
  try {
    const resp = await mongoose.connect(CONF.MONGODB_URI, {
      serverSelectionTimeoutMS: 120000, // Por defecto es 30000 (30 segundos)
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB };
