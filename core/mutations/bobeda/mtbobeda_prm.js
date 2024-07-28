const { v4: uuidv4 } = require('uuid');
const { UTILS } = require("../../../util");
const { ENTBobeda, ENTBobedaprm, ENTMPrompt } = require('../../models')
const ENTConfiguracion = require('../../models/configuracion')
const { TYbobedaprm, TYPrompt } = require('../../types')

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
                const bobedaobj = await ENTBobeda.findOne({ clave: bobeda, usuario: userclave })
                //
                const existenciaConf = await ENTConfiguracion.findOne({ clave: bobedaobj.configuracion })
                const prmsbobeda = await ENTBobedaprm.countDocuments({ bobeda: bobedaobj.clave })
                if (existenciaConf.limite_prompts == prmsbobeda) {
                    status = false
                }
                if (!status) {
                    return {}
                }
                let objPromt = { datos, respuesta }
                objPromt.clave = uuidv4()
                const newprm = new ENTMPrompt(objPromt);
                const respprm = await newprm.save()
                let objset = {
                    bobeda,
                    prompt: respprm.clave,
                    nombre_prompt
                }
                objset.clave = uuidv4()
                const newprmbobeda = new ENTBobedaprm(objset)
                const respprmbobeda = await newprmbobeda.save()
                return respprmbobeda
            } catch (error) {
                throw error
            }
        },
    },
    PUT: {
        type: TYbobedaprm,
        args: {
            prompt: { type: new GraphQLNonNull(GraphQLString) },
            bobeda: { type: new GraphQLNonNull(GraphQLString) },
            nombre_prompt: { type: new GraphQLNonNull(GraphQLString) },
            datos: { type: new GraphQLNonNull(GraphQLString) },
            respuesta: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(otros, { bobeda, nombre_prompt, prompt, datos, respuesta }) {
            try {
                let userclave = await UTILS.getCurrentUser()
                // BUSCAMOS LA BOBEDA
                let getbobeda = await ENTBobeda.findOne({ usuario: userclave, bobeda })
                if (!getbobeda) {
                    return {}
                }
                // 
                let getbobedaprm = await ENTBobedaprm.findOne({ bobeda, prompt })
                if (!getbobedaprm) {
                    return {}
                }
                // ACTUALIZAMOS LOS DATOS DE LA RELACION ENTRE EL PROMPT Y LA BOBEDA
                if (nombre_prompt != null || nombre_prompt != undefined || nombre_prompt != '') {
                    const putbobedaprm = await ENTBobedaprm.findOneAndUpdate({ bobeda, prompt }, { nombre_prompt })
                }
                let objputprmt = {}
                datos != null || datos != undefined || datos != '' ? objputprmt[`datos`] = datos : null;
                respuesta != null || respuesta != undefined || respuesta != '' ? objputprmt[`respuesta`] = respuesta : null;
                if (Object.keys(objputprmt).includes('datos') || Object.keys(objputprmt).includes('respuesta')) {
                    const putprmt = await ENTMPrompt.findOneAndUpdate({ clave: prompt }, objputprmt)
                }
                getbobedaprm = await ENTBobedaprm.findOne({ bobeda, prompt })
                getbobeda = await ENTBobeda.findOne({ usuario: userclave, bobeda })
                return {
                    bobeda:getbobeda.clave,
                    prompt: getbobedaprm.clave,
                    nombre_prompt:getbobedaprm.nombre_prompt
                }


            } catch (error) {
                console.error(error)
            }
        }
    }
}
module.exports = MTBobedaprm