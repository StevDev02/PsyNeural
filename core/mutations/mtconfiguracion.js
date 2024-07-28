const ENTConfiguracion = require('../models/configuracion')
const { TYConfiguracion } = require('../types')
const { v4: uuidv4 } = require('uuid');
const { UTILS } = require("../../util");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt,
} = require("graphql");

const MTConfiguracion = {
    POST: {
        type: TYConfiguracion,
        args: {
            idioma: { type: new GraphQLNonNull(GraphQLInt) },
            font_size: { type: new GraphQLNonNull(GraphQLInt) },
            fuente: { type: new GraphQLNonNull(GraphQLInt) },
        },
        async resolve(_, { idioma, font_size, fuente }) {
            const objpost = {
                idioma, font_size, fuente,
                limite_bobedas: 2,
                limite_notas: 15,
                limite_prompts: 15,
                limite_asistente: 1
            }
            const permisos = await UTILS.validarpermisos()
            if (!permisos.status) {
                return permisos
            }
            const existe = await ENTConfiguracion.findOne(objpost)
            if (existe) {
                return existe
            }
            objpost.clave=uuidv4()
            const conf = new ENTConfiguracion(objpost);
            const resp = await conf.save()
            if (resp) {
                return resp
            } else {
                return resp
            }
        },
    },
    DEL: {
        type: TYConfiguracion,
        args: {
            clave: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(_, { clave }) {
            const permisos = await UTILS.validarpermisos()
            if (!permisos.status) {
                return permisos
            }
            const existe = await ENTConfiguracion.findOne({ clave: clave })
            if (!existe) {
                return {}
            }
            const resp = await ENTConfiguracion.findOneAndDelete({ clave: clave })
            if (resp) {
                return {}

            } else {
                return {}
            }
        },
    }
}
module.exports = MTConfiguracion