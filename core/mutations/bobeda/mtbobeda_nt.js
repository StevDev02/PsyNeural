const { ENTBobedant, ENTConfiguracion, ENTBobeda, ENTNotas } = require('../../models')
const { v4: uuidv4 } = require('uuid');
const { UTILS } = require("../../../util");
const { TYBobedant } = require('../../types')
const { SECRETDECRIPT, JWT_SECRET } = require("../../../config");
const os = require('os');
const fs = require('fs');
const mkdirp = require('mkdirp');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLScalarType,
    GraphQLInt
} = require("graphql");

const MTBobedant = {
    POST: {
        type: TYBobedant,
        args: {
            bobeda: { type: new GraphQLNonNull(GraphQLString) },
            nombre: { type: new GraphQLNonNull(GraphQLString) },
            info: { type: new GraphQLNonNull(GraphQLString) },
            tipo: { type: new GraphQLNonNull(GraphQLInt) },
            formato: { type: new GraphQLNonNull(GraphQLInt) },
            nombre_carpeta: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(_, { bobeda, nombre, info, tipo, formato, nombre_carpeta }) {
            try {
                let status = true
                const currentuser = global.currentuser
                let userclave = await UTILS.decrypt(currentuser.clave)
                const bobedaobj = await ENTBobeda.findOne().where({ clave: bobeda, usuario: userclave })
                //
                const existenciaConf = await ENTConfiguracion.findOne().where({ clave: bobedaobj.configuracion })
                const prmsbobeda = await ENTBobedant.countDocuments().where({ bobeda: bobedaobj.clave })
                if (existenciaConf.limite_notas == prmsbobeda) {
                    status = false
                }
                if (!status) {
                    return {}
                }

                const objnota = { nombre, info, tipo, formato }
                //
                // 1. Generate and create temporary folder
                const tempFolderName = `${os.tmpdir()}/upload-${Math.random().toString(36).substr(2, 9)}`;
                await mkdirp(tempFolderName);
                console.log('Temporary folder created:', tempFolderName);

                // 2. Convert base64 to Buffer and write to temporary file
                const buffer = Buffer.from(base64, 'base64');
                const tempFilePath = `${tempFolderName}/${filename}`;
                const tempFile = fs.createWriteStream(tempFilePath);
                tempFile.write(buffer);
                tempFile.end();

                // 3. Perform file validation (using tempFilePath)
                // 1. MIME Type Validation
                const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif']; // Replace with your allowed types
                if (!allowedMimeTypes.includes(mimetype)) {
                    throw new Error(`Invalid MIME type: ${mimetype}. Allowed types: ${allowedMimeTypes.join(', ')}`);
                }

                // 2. File Size Validation
                const maxFileSize = 1024 * 1024 * 5; // 5 MB in bytes
                const stats = await fs.promises.stat(tempFilePath);
                if (stats.size > maxFileSize) {
                    throw new Error(`File size exceeds limit: ${stats.size} bytes. Maximum: ${maxFileSize} bytes`);
                }

                // 3. (Optional) Format Validation (Image Extension)
                if (mimetype.startsWith('image/')) {
                    const supportedExtensions = ['.jpg', '.jpeg', '.png', '.gif']; // Replace with your supported extensions
                    const fileExtension = path.extname(filename).toLowerCase();
                    if (!supportedExtensions.includes(fileExtension)) {
                        throw new Error(`Invalid file extension: ${fileExtension}. Supported extensions: ${supportedExtensions.join(', ')}`);
                    }
                }

                // 4. (Optional) Cleanup temporary folder
                try {
                    await fs.promises.rmrf(tempFolderName);
                    console.log('Temporary folder removed:', tempFolderName);
                } catch (err) {
                    console.error('Error removing temporary folder:', err);
                    // Handle error appropriately
                }

                // 5. Return response based on validation results
                // ...
                //
                const setnota = new ENTNotas(objnota)
                const respnotas = await setnota.save()
                const objbobedant = { bobeda, nombre_carpeta, nota: setnota.clave }
                const setnotabobeda = new ENTBobedant(objbobedant)
                const respbobedant = await setnotabobeda.save()
                return respbobedant
            } catch (err) {
                console.error('Error creating temporary folder:', err);
                throw err; // Handle error appropriately
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
module.exports = MTBobedant