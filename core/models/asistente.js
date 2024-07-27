const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const SCHAsistente = new Schema(
  {
    clave: { type: String, required: true, default: uuidv4() },
    nombre: { type: String, required: true },
    skin: { type: String, required: true },
    tono_voz: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("ENTAsistente", SCHAsistente);
