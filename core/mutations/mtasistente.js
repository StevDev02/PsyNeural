const ENTAsistente = require('../models/asistente')
const { TYasistente } = require('../types')
const { v4: uuidv4 } = require('uuid');
const { UTILS } = require("../../util");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = require("graphql");

const MTAsistente = {
    POST: {
        type: TYasistente,
        args: {
            nombre: { type: new GraphQLNonNull(GraphQLString) },
            skin: { type: new GraphQLNonNull(GraphQLString) },
            tono_voz: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(_, { nombre, skin, tono_voz }) {
            const obj = {
                nombre,
                skin,
                tono_voz,
            }
            const permisos = await UTILS.validarpermisos()
            if (!permisos.status) {
                return permisos
            }
            obj.clave=uuidv4()
            const existe = await ENTAsistente.findOne(obj)
            if (existe) {
                return existe
            }
            const data = new ENTAsistente(obj);
            const resp = data.save()
            if (resp) {
                return resp

            } else {
                return {}
            }
        },
    },
    DEL: {
        type: TYasistente,
        args: {
            clave: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(_, { clave }) {
            const permisos = await UTILS.validarpermisos()
            if (!permisos.status) {
                return permisos
            }
            const existe = await ENTAsistente.findOne({ clave: clave })
            if (!existe) {
                return {}
            }
            const resp = await ENTAsistente.findOneAndDelete({ clave: clave })
            if (resp) {
                return {}

            } else {
                return {}
            }
        },
    }
}
module.exports = MTAsistente