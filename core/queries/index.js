const { TYUsuario, TYAll, TYBobeda } = require("../types");
const { ENTBobeda, ENTMUsuario, ENTConfiguracion } = require("../models");
const { GraphQLList } = require("graphql");
const UTILS = require("../../util/utils");

const QYUsuario = {
  type: TYUsuario,
  description: "info del usuario logeado",
  args: {},
  resolve: async (_, { clave }) => {
    let status = true;
    const currentuser = global.currentuser;
    let userclave = await UTILS.decrypt(currentuser.clave);
    const user = await ENTMUsuario.findOne({ clave: userclave });
    return user;
  },
};

const QYRoot = {
  type: TYUsuario,
  description: "info del usuario logeado",
  args: {},
  resolve: async (_, args) => {
    return {
      clave: null,
      nickname: null,
      correo: null,
      sesionActiva: null,
      otrosDatos: null,
    };
  },
};

const QYBobeda = {
  type: GraphQLList(TYBobeda),
  description: "regresa los datos de las bobedas del usuario",
  args: {},
  resolve: async (_, args) => {
    try {
      let status = true;
      const currentuser = global.currentuser;
      let userclave = await UTILS.decrypt(currentuser.clave);
      //
      const bobeda = await ENTBobeda.find({ usuario: userclave });
      return bobeda;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = { QYUsuario, QYBobeda, QYRoot };
