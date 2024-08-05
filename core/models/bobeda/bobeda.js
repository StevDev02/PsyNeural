const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const SCHBobeda = new Schema(
  {
    clave: { type: String, required: true, default: uuidv4(),unique: true },
    configuracion: { type: String, required: true },
    asistente: { type: String, required: true },
    usuario: { type: String, required: true },
    nombre: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("ENTBobeda", SCHBobeda);
