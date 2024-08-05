const { config } = require("dotenv");
config();

const CONF = {
  MONGODB_URI: process.env.STATE == "DEV" ? process.env.DEV_URI_DB : process.env.PROD_URI_DB,
  PORT: process.env.PORT,
  ADMIN_USER: process.env.STATE == "DEV" ? process.env.LOCAL_ADMIN_USER : process.env.ADMIN_USER,
  LOCAL_ADMIN_USER: process.env.LOCAL_ADMIN_USER,
  JWT_SECRET: process.env.JWT_SECRET,
  SECRETDECRIPT: process.env.SECRETDECRIPT,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  MIMESSOPORTADOSAUDIO: {
    "audio/mpeg": { formato: ".mp3" },
    "audio/ogg": { formato: ".ogg" },
    "audio/wav": { formato: ".wav" },
    "audio/webm": { formato: ".webm" },
    "audio/aac": { formato: ".aac" },
  },
  MIMESSOPORTADOSFOTOS: {
    "image/jpeg": { formato: ".jpeg" },
    "image/jpg": { formato: ".jpg" },
    "image/png": { formato: ".pnj" }
  },
  SPECHTOTEXT: {
    config: {
      encoding: 'BASE64', // Indica que el audio está en base64
      sampleRateHertz: 16000, // Tasa de muestreo (ajusta según tu audio)
      languageCode: 'es-ES', // Código de idioma (español de España)
    },
    audio: {
      content: 'TU_AUDIO_BASE64_AQUI', // Reemplaza con tu audio en base64
    },
  }

}
module.exports = CONF