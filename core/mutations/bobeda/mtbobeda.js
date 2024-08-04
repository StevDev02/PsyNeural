const { ENTBobeda, ENTConfiguracion, ENTBobedaprm, ENTBobedant,ENTNotas,ENTMPrompt } = require('../../models')
const { TYBobeda, TYResponse } = require('../../types')
const { v4: uuidv4 } = require('uuid');
const { UTILS } = require("../../../util");
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
        description:"Crea bóvedas el usuario tiene el control pero están limitadas por la configuración",
        args: {
            configuracion: { type: new GraphQLNonNull(GraphQLString) },
            asistente: { type: new GraphQLNonNull(GraphQLString) },
            nombre: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(_, { configuracion, asistente, nombre }) {
            try {
                let status = true
                let userclave = await UTILS.getCurrentUser()
                const bobedasporusuario = await ENTBobeda.countDocuments({ usuario: userclave })
                const existenciaConf = await ENTConfiguracion.findOne({ clave: configuracion })
                const existenciaasistente = await ENTConfiguracion.findOne({ clave: configuracion })
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
                obj.clave = uuidv4()
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
        type: TYBobeda,
        description:"Actualiza bóvedas el usuario tiene el control pero están limitadas por la configuración",
        args: {
            configuracion: { type: new GraphQLNonNull(GraphQLString) },
            asistente: { type: new GraphQLNonNull(GraphQLString) },
            nombre: { type: new GraphQLNonNull(GraphQLString) },
            clave: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(_, { configuracion, asistente, nombre, clave }) {
            let userclave = await UTILS.getCurrentUser()
            const getbobeda = await ENTBobeda.findOne({ usuario: userclave })
            if (!getbobeda) {
                return {}
            }
            let newbobeda = {}
            configuracion ? newbobeda[`configuracion`] = configuracion : null;
            asistente ? newbobeda[`asistente`] = asistente : null;
            nombre ? newbobeda[`nombre`] = nombre : null;
            const put = await ENTBobeda.updateOne({ clave }, newbobeda)
            const pgetbobeda = await ENTBobeda.findOne({ usuario: userclave })
            return pgetbobeda
        },
    },
    DEL: {
        type: TYBobeda,
        description:"Elimina bóvedas el usuario tiene el control pero están limitadas por la configuración",
        args: {
            configuracion: { type: new GraphQLNonNull(GraphQLString) },
            asistente: { type: new GraphQLNonNull(GraphQLString) },
            nombre: { type: new GraphQLNonNull(GraphQLString) },
            clave: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(_, { configuracion, asistente, nombre, clave }) {
            let userclave = await UTILS.getCurrentUser()
            const getbobeda = await ENTBobeda.findOne({ usuario: userclave })
            if (!getbobeda) {
                return {}
            }
            // ELIMINAMOS LAS BOBEDAS
            const notas_bobeda = await ENTBobedant.find({ bobeda: getbobeda.clave })
            for await(const nota of notas_bobeda){
                const nt=await ENTNotas.findOneAndDelete({nota:nota.nota})
                const bnt=await ENTBobedant.findOneAndDelete({clave:nota.clave})
            }
            // ELIMINAMOS LOS PROMPTS
            const prmt_bobeda = await ENTBobedant.find({ bobeda: getbobeda.clave })
            for await(const mrpt of prmt_bobeda){
                const mrpt=await ENTMPrompt.findOneAndDelete({nota:mrpt.nota})
                const bmrpt=await ENTBobedaprm.findOneAndDelete({clave:mrpt.clave})
            }
            return {}
        },
    }
}
module.exports = MTBobeda