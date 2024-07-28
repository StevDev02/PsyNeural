const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const SCHUsuario = new Schema(
  {
    clave: { type: String, require: true, unique: true, default: uuidv4() },
    nickname: { type: String, require: true, unique: false },
    correo: {
      type: String,
      require: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Provide a valid email",
      ],
    },
    correoRec: {
      type: String,
      require: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Provide a valid email",
      ],
    },
    password: { type: String, require: true, unique: false },
    code2FA: { type: String, require: false, unique: true },
    sesionActiva: { type: Number, require: true, unique: false },
    refreshToken: { type: String, require: true, unique: false },
    G_ID: { type: String, require: false, unique: false },
    otrosDatos: { type: String, require: true, unique: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const ENTMUsuario = model("ENTMUsuario", SCHUsuario);
module.exports = ENTMUsuario
