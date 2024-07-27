const ENTBobeda = require('../../models/bobeda/bobeda')
const ENTConfiguracion = require('../../models/configuracion')
const { TYBobeda, TYResponse } = require('../../types')
const { v4: uuidv4 } = require('uuid');
const { UTILS } = require("../../../util");
const { SECRETDECRIPT, JWT_SECRET } = require("../../../config");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = require("graphql");

const MTBobeda = {
    POST: {
        type: TYBobeda,
        args: {
            configuracion: { type: new GraphQLNonNull(GraphQLString) },
            asistente: { type: new GraphQLNonNull(GraphQLString) },
            nombre: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(_, { configuracion, asistente, nombre }) {
            try {
                let status = true
                const currentuser = global.currentuser
                let userclave = await UTILS.decrypt(currentuser.clave)
                const bobedasporusuario = await ENTBobeda.countDocuments().where({ usuario: userclave })
                const existenciaConf = await ENTConfiguracion.findOne().where({ clave: configuracion })
                const existenciaasistente = await ENTConfiguracion.findOne().where({ clave: configuracion })
                if (existenciaConf.limite_bobedas == bobedasporusuario) { status = false }
                if (!existenciaConf) { status = false }
                if (!existenciaasistente) { status = false }
                if (!status) {
                    return {
                        configuracion: "",
                        asistente: "",
                        clave: "",
                        nombre: ""
                    }
                }
                const obj = {
                    configuracion,
                    asistente,
                    usuario: userclave,
                    nombre
                }
                const data = new ENTBobeda(obj);
                const resp = await data.save()
                return {
                    configuracion,
                    asistente,
                    clave: resp.clave,
                    nombre
                }
            } catch (error) {
                throw error
            }
        },
    },
    PUT: {
        type: GraphQLString,
        args: {
        },
        async resolve(_, { }) {

        },
    }
}
module.exports = MTBobeda