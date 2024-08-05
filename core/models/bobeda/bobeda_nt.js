const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const SCHBobedant = new Schema(
  {
    clave: { type: String, required: true, default: uuidv4(),unique: true },
    bobeda: { type: String, required: true },
    nota: { type: String, required: true },
    nombre_carpeta: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("ENTBobedant", SCHBobedant);
