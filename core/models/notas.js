const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const SCHNotas = new Schema(
  {
    clave: { type: String, required: true, default: uuidv4() },
    nombre: { type: String, required: true },
    info: { type: String, required: true },
    tipo: { type: Number, required: true },
    formato: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("ENTNotas", SCHNotas);
