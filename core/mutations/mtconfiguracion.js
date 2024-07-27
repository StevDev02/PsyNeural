const ENTConfiguracion = require('../models/configuracion')
const { TYConfiguracion } = require('../types')
const { v4: uuidv4 } = require('uuid');
const { UTILS } = require("../../util");
const { SECRETDECRIPT, JWT_SECRET } = require("../../config");
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
        async resolve(_, { idioma, font_size, fuente, limite_bobedas, limite_notas, limite_prompts, limite_asistente }) {
            const objpost = {
                idioma, font_size, fuente,
                limite_bobedas: 2,
                limite_notas: 15,
                limite_prompts: 15,
                limite_asistente: 1
            }
            const currentuser = global.currentuser
            let userclave = await UTILS.decrypt(currentuser.clave)
            let prodcomp=userclave!==process.env.ADMIN_USER
            let localcomp=userclave!==process.env.LOCAL_ADMIN_USER
            if(!(process.env.STATE=="DEV"?localcomp:prodcomp)){
                return {}
            }
            const existe = await ENTConfiguracion.findOne().where(objpost)
            if (existe) {
                return existe
            }
            const conf = new ENTConfiguracion(objpost);
            const resp = await conf.save()
            return resp
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
module.exports = MTConfiguracion