const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const SCHConfiguracion = new Schema(
  {
    clave: { type: String, required: true, default: uuidv4(),unique: true },
    idioma: { type: Number, required: true },
    font_size: { type: Number, required: true },
    fuente: { type: String, required: true },
    limite_bobedas: { type: Number, required: true },
    limite_notas: { type: Number, required: true },
    limite_prompts: { type: Number, required: true },
    limite_asistente: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("ENTConfiguracion", SCHConfiguracion);
