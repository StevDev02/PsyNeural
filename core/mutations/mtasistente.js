const ENTAsistente = require('../models/asistente')
const { TYasistente } = require('../types')
const { v4: uuidv4 } = require('uuid');
const { UTILS } = require("../../util");
const { SECRETDECRIPT, JWT_SECRET } = require("../../config");
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
            const currentuser = global.currentuser
            let userclave = await UTILS.decrypt(currentuser.clave)
            let prodcomp=userclave!==process.env.ADMIN_USER
            let localcomp=userclave!==process.env.LOCAL_ADMIN_USER
            if(!(process.env.STATE=="DEV"?localcomp:prodcomp)){
                return {}
            }
            const existe = await ENTAsistente.findOne().where(obj)
            if (existe) {
                return existe
            }
            const data = new ENTAsistente(obj);
            const resp = data.save()
            return resp
        },
    },
    PUT: {
        type: TYasistente,
        args: {
        },
        async resolve(_, { }) {

        },
    }
}
module.exports = MTAsistente