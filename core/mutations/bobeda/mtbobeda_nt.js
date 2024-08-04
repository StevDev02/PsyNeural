const { ENTBobedant, ENTConfiguracion, ENTBobeda, ENTNotas } = require('../../models')
const { v4: uuidv4 } = require('uuid');
const { UTILS } = require("../../../util");
const CONF = require('../../../config')
const { TYBobedant } = require('../../types')
const { SpeechClient } = require('@google-cloud/speech');
const path = require('path');
const os = require('os');
const tmp = require('tmp');
const fs = require('fs').promises;
const mkdirp = require('mkdirp');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLScalarType,
    GraphQLInt,
    GraphQLError
} = require("graphql");

const MTBobedant = {
    POST: {
        type: TYBobedant,
        description: "Mutación para crear notas se proporciona la bóveda donde sera almacenado el datos asi como la info ya sea texto o archivo los archivo deben seguir la siguiente sintaxis {'file':{'mime':'audio/mpeg','data': . si no se detecta el mime retomara como texto",
        args: {
            bobeda: { type: new GraphQLNonNull(GraphQLString) },
            nombre: { type: new GraphQLNonNull(GraphQLString) },
            info: { type: new GraphQLNonNull(GraphQLString) },
            nombre_carpeta: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(_, { bobeda, nombre, info, nombre_carpeta }) {
            try {
                let status = true;
                let userclave = await UTILS.getCurrentUser();
                let bobedaobj = await ENTBobeda.findOne({ usuario: userclave, clave: bobeda }); // Cambiado a findOne para obtener un solo objeto
                if (!bobedaobj) return new GraphQLError("No se encontró la bobeda");

                const existenciaConf = await ENTConfiguracion.findOne({ clave: bobedaobj.configuracion });
                const prmsbobeda = await ENTBobedant.countDocuments({ bobeda: bobedaobj.clave });
                if (existenciaConf.limite_notas === prmsbobeda) {
                    status = false;
                }
                if (!status) {
                    return new GraphQLError("Lo siento alcanzaste el limite de notas");
                }

                info = JSON.parse(info).file;
                if (!Object.keys(CONF.MIMESSOPORTADOSAUDIO).includes(info.mime)) {
                    if (Object.keys(MIMESSOPORTADOSFOTOS).includes(info.mime)) {
                        let tipoFormato = Object.keys(CONF.MIMESSOPORTADOSFOTOS).indexOf(info.mime);
                        const objnota = { nombre, info, tipo: tipoFormato, formato: tipoFormato };
                        const setnota = await ENTNotas.updateOne({ bobeda, nota }, objnota);
                        const objbobedant = { nombre_carpeta, nota: setnota.clave };
                        const setnotabobeda = ENTBobedant.updateOne({ bobeda }, objbobedant);
                        const respbobedant = await ENTBobedant.findOne({ nota, bobeda })

                        return respbobedant;
                    } else {
                        // se toma como tipo texto
                        const objnota = { nombre, info, tipo: -1, formato: -1 };
                        const setnota = new ENTNotas(objnota);
                        setnota.clave = uuidv4();
                        await setnota.save();

                        const objbobedant = { bobeda, nombre_carpeta, nota: setnota.clave };
                        const setnotabobeda = new ENTBobedant(objbobedant);
                        setnotabobeda.clave = uuidv4();
                        const respbobedant = await setnotabobeda.save();

                        return respbobedant;
                    }
                }

                let tipoFormato = Object.keys(CONF.MIMESSOPORTADOSAUDIO).indexOf(info.mime);
                const objnota = { nombre, info, tipo: tipoFormato, formato: tipoFormato };

                const reqtospech = {
                    config: {
                        encoding: 'LINEAR16', // Indica que el audio está en base64
                        sampleRateHertz: 16000, // Tasa de muestreo (ajusta según tu audio)
                        languageCode: 'es-ES', // Código de idioma (español de España)
                    },
                    audio: {
                        content: info.data, // Reemplaza con tu audio en base64
                    },
                };

                // Crear un directorio temporal
                const tempDir = tmp.dirSync({ unsafeCleanup: true });
                const tempFilePath = path.join(tempDir.name, 'credentials.json');

                // Asegúrate de que GOOGLE_APPLICATION_CREDENTIALS contenga un JSON válido
                const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);
                const jsonString = JSON.stringify(credentials, null, 2);

                // Escribir el contenido en el archivo temporal
                await fs.writeFile(tempFilePath, jsonString, 'utf8');

                // Establecer la ruta del archivo temporal en la variable de entorno
                process.env.GOOGLE_APPLICATION_CREDENTIALS = tempFilePath;

                // Crear el cliente de Speech
                const client_speech = new SpeechClient();
                const cliente = await client_speech.recognize(reqtospech);

                if (cliente && cliente.results && cliente.results.length > 0) {
                    const textoReconocido = cliente.results[0].alternatives[0].transcript;
                    objnota.info = textoReconocido;

                    const setnota = new ENTNotas(objnota);
                    setnota.clave = uuidv4();
                    await setnota.save();

                    const objbobedant = { bobeda, nombre_carpeta, nota: setnota.clave };
                    const setnotabobeda = new ENTBobedant(objbobedant);
                    setnotabobeda.clave = uuidv4();
                    const respbobedant = await setnotabobeda.save();

                    return respbobedant;
                } else {
                    return new GraphQLError("No se pudo obtener el texto");
                }
            } catch (err) {
                return new GraphQLError(err);
            } finally {
                tempDir.removeCallback();
            }
        },
    },
    PUT: {
        type: GraphQLString,
        description:"Mutación para actualizar notas se proporciona la bóveda donde sera almacenado el datos asi como la info ya sea texto o archivo los archivo deben seguir la siguiente sintaxis {'file':{'mime':'audio/mpeg','data': . si no se detecta el mime retomara como texto",
        args: {
            bobeda: { type: new GraphQLNonNull(GraphQLString) },
            nota: { type: new GraphQLNonNull(GraphQLString) },
            nombre_carpeta: { type: new GraphQLNonNull(GraphQLString) },
            nombre: { type: new GraphQLNonNull(GraphQLString) },
            info: { type: new GraphQLNonNull(GraphQLString) }
        },
        async resolve(_, { nota, bobeda, nombre, info, nombre_carpeta }) {
            try {
                let status = true;
                let userclave = await UTILS.getCurrentUser();
                let bobedaobj = await ENTBobeda.findOne({ usuario: userclave, clave: bobeda }); // Cambiado a findOne para obtener un solo objeto
                if (!bobedaobj) return new GraphQLError("No se encontró la bobeda");
                const pertenecenota = await ENTBobedant.findOne({ bobeda, nota })
                if (!pertenecenota) {
                    return new GraphQLError("No se encontró la nota");
                }
                const existenciaConf = await ENTConfiguracion.findOne({ clave: bobedaobj.configuracion });
                const prmsbobeda = await ENTBobedant.countDocuments({ bobeda: bobedaobj.clave });
                if (existenciaConf.limite_notas === prmsbobeda) {
                    status = false;
                }
                if (!status) {
                    return new GraphQLError("Lo siento alcanzaste el limite de notas");
                }

                info = JSON.parse(info).file;
                if (!Object.keys(CONF.MIMESSOPORTADOSAUDIO).includes(info.mime)) {
                    if (Object.keys(MIMESSOPORTADOSFOTOS).includes(info.mime)) {
                        let tipoFormato = Object.keys(CONF.MIMESSOPORTADOSFOTOS).indexOf(info.mime);
                        const objnota = { nombre, info, tipo: tipoFormato, formato: tipoFormato };
                        const setnota = await ENTNotas.updateOne({ bobeda, nota }, objnota);
                        const objbobedant = { nombre_carpeta, nota: setnota.clave };
                        const setnotabobeda = ENTBobedant.updateOne({ bobeda }, objbobedant);
                        const respbobedant = await ENTBobedant.findOne({ nota, bobeda })

                        return respbobedant;
                    } else {
                        // se toma como tipo texto
                        const objnota = { nombre, info, tipo: -1, formato: -1 };
                        const setnota = await ENTNotas.updateOne({ bobeda, nota }, objnota);
                        const objbobedant = { nombre_carpeta, nota: setnota.clave };
                        const setnotabobeda = ENTBobedant.updateOne({ bobeda }, objbobedant);
                        const respbobedant = await ENTBobedant.findOne({ nota, bobeda })

                        return respbobedant;
                    }
                }

                let tipoFormato = Object.keys(CONF.MIMESSOPORTADOSAUDIO).indexOf(info.mime);
                const objnota = { nombre, info, tipo: tipoFormato, formato: tipoFormato };

                const reqtospech = {
                    config: {
                        encoding: 'LINEAR16', // Indica que el audio está en base64
                        sampleRateHertz: 16000, // Tasa de muestreo (ajusta según tu audio)
                        languageCode: 'es-ES', // Código de idioma (español de España)
                    },
                    audio: {
                        content: info.data, // Reemplaza con tu audio en base64
                    },
                };

                // Crear un directorio temporal
                const tempDir = tmp.dirSync({ unsafeCleanup: true });
                const tempFilePath = path.join(tempDir.name, 'credentials.json');

                // Asegúrate de que GOOGLE_APPLICATION_CREDENTIALS contenga un JSON válido
                const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);
                const jsonString = JSON.stringify(credentials, null, 2);

                // Escribir el contenido en el archivo temporal
                await fs.writeFile(tempFilePath, jsonString, 'utf8');

                // Establecer la ruta del archivo temporal en la variable de entorno
                process.env.GOOGLE_APPLICATION_CREDENTIALS = tempFilePath;

                // Crear el cliente de Speech
                const client_speech = new SpeechClient();
                const cliente = await client_speech.recognize(reqtospech);

                if (cliente && cliente.results && cliente.results.length > 0) {
                    const textoReconocido = cliente.results[0].alternatives[0].transcript;
                    objnota.info = textoReconocido;
                    const setnota = await ENTNotas.updateOne({ bobeda, nota }, objnota);
                    const objbobedant = { nombre_carpeta, nota: setnota.clave };
                    const setnotabobeda = ENTBobedant.updateOne({ bobeda }, objbobedant);
                    const respbobedant = await ENTBobedant.findOne({ nota, bobeda })

                    return respbobedant;
                } else {
                    return new GraphQLError("No se pudo obtener el texto");
                }
            } catch (err) {
                return new GraphQLError(err);
            } finally {
                tempDir.removeCallback();
            }
        },
    }
}
module.exports = MTBobedant