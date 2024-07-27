const { v4: uuidv4 } = require('uuid');
const { UTILS } = require("../../../util");
const ENTBobeda = require('../../models/bobeda/bobeda')
const ENTBobedaprm = require('../../models/bobeda/bobeda_prm')
const ENTMPrompt = require('../../models/prompt')
const ENTConfiguracion = require('../../models/configuracion')
const { TYbobedaprm, TYPrompt } = require('../../types')
const { SECRETDECRIPT, JWT_SECRET } = require("../../../config");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = require("graphql");


const MTBobedaprm = {
    POST: {
        type: TYbobedaprm,
        args: {
            bobeda: { type: new GraphQLNonNull(GraphQLString) },
            datos: { type: new GraphQLNonNull(GraphQLString) },
            respuesta: { type: new GraphQLNonNull(GraphQLString) },
            nombre_prompt: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(otros, { bobeda, datos, respuesta, nombre_prompt }) {
            try {
                let status = true
                const currentuser = global.currentuser
                let userclave = await UTILS.decrypt(currentuser.clave)
                const bobedaobj = await ENTBobeda.findOne().where({ clave: bobeda, usuario: userclave })
                //
                const existenciaConf = await ENTConfiguracion.findOne().where({ clave: bobedaobj.configuracion })
                const prmsbobeda = await ENTBobedaprm.countDocuments().where({ bobeda: bobedaobj.clave })
                if (existenciaConf.limite_prompts == prmsbobeda) {
                    status = false
                }
                if (!status) {
                    return {}
                }
                let objPromt = { datos, respuesta }
                const newprm = new ENTMPrompt(objPromt);
                const respprm = await newprm.save()
                let objset = {
                    bobeda,
                    prompt: respprm.clave,
                    nombre_prompt
                }
                const newprmbobeda = new ENTBobedaprm(objset)
                const respprmbobeda = await newprmbobeda.save()
                return respprmbobeda
            } catch (error) {
                throw error
            }
        },
    }
}
module.exports = MTBobedaprm