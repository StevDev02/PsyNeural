const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLUnionType,
    GraphQLNonNull,
    GraphQLScalarType
} = require("graphql");

const {
    ENTMPrompt,
    ENTNotas,
    ENTConfiguracion,
    ENTAsistente,
    ENTBobedant,
    ENTBobedaprm
} = require('../models')

const TYString = new GraphQLObjectType({
    name: "string",
    description: "simple string para el response",
    fields: () => ({
        msg: {
            type: new GraphQLNonNull(GraphQLString), require: true, resolve: (args) => {
                return args
            }
        }
    })
})

const TYasistente = new GraphQLObjectType({
    name: "asistente",
    description: "tipo asistente",
    fields: () => ({
        clave: { type: GraphQLString, require: true, unique: true },
        nombre: { type: GraphQLString, require: true },
        skin: { type: GraphQLString, require: true },
        tono_voz: { type: GraphQLString, require: true },
    }),
});

const TYConfiguracion = new GraphQLObjectType({
    name: "configuracion",
    description: "tipo configuracion",
    fields: () => ({
        clave: { type: GraphQLString, require: true },
        idioma: { type: GraphQLString, require: true },
        font_size: { type: GraphQLString, require: true },
        fuente: { type: GraphQLString, require: true },
        limite_bobedas: { type: GraphQLString, require: true },
        limite_notas: { type: GraphQLString, require: true },
        limite_prompts: { type: GraphQLString, require: true },
        limite_asistente: { type: GraphQLString, require: true },
    }),
});

const TYUsuario = new GraphQLObjectType({
    name: "usuario",
    description: "tipo usuario",
    fields: () => ({
        clave: { type: GraphQLString },
        nickname: { type: GraphQLString },
        correo: { type: GraphQLString },
        sesionActiva: { type: GraphQLString },
        otrosDatos: { type: new GraphQLList(GraphQLString) },
    }),
});

const TYNota = new GraphQLObjectType({
    name: "nota",
    description: "tipo nota",
    fields: () => ({
        nombre: { type: GraphQLString, require: true },
        info: { type: GraphQLString, require: true, description: "contenido del archivo en base 64" },
        tipo: { type: GraphQLInt, require: true, description: "tipo de archivo, solo png,jpeg,jpg,pdf" },
        formato: { type: GraphQLInt, require: true, description: "codificasion" },
    }),
});

const TYPrompt = new GraphQLObjectType({
    name: "prompt",
    description: "tipo prompt",
    fields: () => ({
        clave: { type: GraphQLString, require: true },
        datos: { type: GraphQLString, require: true },
        respuesta: { type: GraphQLString, require: true }
    }),
});

const TYBobedant = new GraphQLObjectType({
    name: "bobeda_nt",
    description: "tipo bobeda notas",
    fields: () => ({
        clave: { type: GraphQLString, required: true },
        bobeda: { type: GraphQLString, required: true },
        nota: {
            type: GraphQLList(TYNota), required: true, async resolve(obj) {
                let datos = []
                if (Array.isArray(obj)) {
                    for await (const dt of obj) {
                        const promptData = await ENTNotas.findOne({ clave: obj.prompt })
                        datos.push(promptData)
                    }
                } else {
                    const promptData = await ENTNotas.findOne({ clave: obj.prompt })
                    datos.push(promptData)
                }
                return datos
            }
        },
        nombre_carpeta: { type: GraphQLString, required: true },
    }),
});

const TYbobedaprm = new GraphQLObjectType({
    name: "bobeda_prm",
    description: "tipo bobeda promts",
    fields: () => ({
        clave: { type: GraphQLString, required: true },
        bobeda: { type: GraphQLString, required: true },
        prompt: {
            type: GraphQLList(TYPrompt), required: true, async resolve(obj) {
                let datos = []
                if (Array.isArray(obj)) {
                    for await (const dt of obj) {
                        const promptData = await ENTMPrompt.findOne({ clave: obj.prompt })
                        datos.push(promptData)
                    }
                } else {
                    const promptData = await ENTMPrompt.findOne({ clave: obj.prompt })
                    datos.push(promptData)
                }
                return datos
            }
        },
        nombre_prompt: { type: GraphQLString, required: true },
    }),
});

const TYBobeda = new GraphQLObjectType({
    name: "bobeda",
    description: "bobeda con mis notas y prmpts",
    fields: () => ({
        clave: { type: GraphQLString, required: true },
        nombre: {
            type: GraphQLString, required: true
        },
        configuracion: {
            type: GraphQLList(TYConfiguracion), required: true, async resolve(obj) {
                const configuraciones = []
                if (typeof obj == "array") {
                    if (!obj) {
                        return []
                    }

                    for await (const conf of obj) {
                        const rep = await ENTConfiguracion.findOne({ clave: conf.configuracion })
                        if (rep) {
                            configuraciones.push(rep)
                        }
                    }
                } else {
                    const rep = await ENTConfiguracion.findOne({ clave: obj.configuracion })
                    if (rep) {
                        configuraciones.push(rep)
                    }
                }
                return configuraciones
            }
        },
        asistente: {
            type: GraphQLList(TYasistente), required: true, async resolve(obj) {
                const asistente = []
                if (typeof obj == "array") {
                    if (!obj) {
                        return []
                    }
                    for await (const data of obj) {
                        const rep = await ENTAsistente.findOne({ clave: data.asistente })
                        if (rep) {
                            asistente.push(rep)
                        }
                    }
                } else {
                    const rep = await ENTAsistente.findOne({ clave: obj.asistente })
                    if (rep) {
                        asistente.push(rep)
                    }
                }
                return asistente
            }
        },
        notas: {
            type: GraphQLList(TYBobedant), required: true, async resolve(obj) {
                const rep = await ENTBobedant.find({ bobeda: obj.clave })
                return rep
            }
        },
        prompt: {
            type: GraphQLList(TYbobedaprm), required: true, async resolve(obj) {
                const rep = await ENTBobedaprm.find({ bobeda: obj.clave })
                return rep
            }
        },
    }),
});

module.exports = {
    TYasistente,
    TYConfiguracion,
    TYUsuario,
    TYbobedaprm,
    TYBobeda,
    TYBobedant
}