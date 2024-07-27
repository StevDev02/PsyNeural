const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const SCHPrompt = new Schema(
  {
    clave: { type: String, required: true, default: uuidv4() },
    datos: { type: String, required: true },
    respuesta: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("ENTMPrompt", SCHPrompt);
