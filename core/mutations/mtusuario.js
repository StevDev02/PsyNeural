const ENTMUsuario = require('../models/usuario')
const { TYUsuario } = require('../types')
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

const MTUsuario = {
    register: {
        type: TYUsuario,
        args: {
            nickname: { type: new GraphQLNonNull(GraphQLString) },
            correo: { type: new GraphQLNonNull(GraphQLString) },
            correoRec: { type: new GraphQLNonNull(GraphQLString) },
            password: { type: new GraphQLNonNull(GraphQLString) },
            G_ID: { type: GraphQLString },
        },
        async resolve(sepa, { nickname, correo, correoRec, password, G_ID }) {
            let userobj = {
                code2FA: uuidv4(), clave: uuidv4(), nickname: nickname, correo: correo, correoRec: correoRec, password: password, G_ID: G_ID ? G_ID : null
            }
            let presepa = sepa
            userobj.password = await UTILS.encryptPassword(userobj.password);
            const numusers = ENTMUsuario.countDocuments()
            if (numusers == 5) {
                return {}
            }
            const user = new ENTMUsuario(userobj);

            const resp = await user.save();

            const token = UTILS.createJWTToken({
                clave: userobj.clave, nickname: userobj.nickname, correo: userobj.correo
            });
            return {
                clave: userobj.clave,
                nickname: userobj.nickname,
                correo: userobj.correo,
                sesionActiva: token,
                otrosDatos: null
            }
        },
    },
    login: {
        type: TYUsuario,
        args: {
            correo: { type: new GraphQLNonNull(GraphQLString) },
            password: { type: new GraphQLNonNull(GraphQLString) },
        },
        async resolve(post, args, context, rootV) {
            try {
                const user = await ENTMUsuario.findOne({ correo: args.correo }).select("+password");

                if (!user) throw new Error("nombre de usuario invalido");

                const validPassword = await UTILS.comparePassword(args.password, user.password);

                if (!validPassword) throw new Error("contraseña incorrecta");
                const claveec = await UTILS.encrypt(user.clave)
                const correoec = await UTILS.encrypt(user.correo)
                const token = UTILS.createJWTToken({
                    clave: claveec,
                    correo: correoec,
                    nickname: user.nickname,
                });

                return {
                    clave: user.clave,
                    nickname: user.nickname,
                    correo: user.correo,
                    sesionActiva: token,
                    otrosDatos: null
                }
            } catch (error) {
                console.error(error)
            }
        },
    },
    PUT: {
        type: GraphQLString,
        args: {
            clave: { type: new GraphQLNonNull(GraphQLString) },
            nickname: { type: GraphQLString },
            correo: { type: GraphQLString },
            correoRec: { type: GraphQLString },
            password: { type: GraphQLString },
        },
        async resolve(otros, { clave, nickname, correo, correoRec, password }) {
            let { ip } = otros
            let encpass=await UTILS.encryptPassword(password);
            let objput = {}
            nickname != null || nickname != undefined ? objput[`nickname`] = nickname : null;
            correo != null || correo != undefined ? objput[`correo`] = correo : null;
            correoRec != null || correoRec != undefined ? objput[`correoRec`] = correoRec : null;
            password != null || password != undefined ? objput[`password`] = encpass : null;
            const user = await ENTMUsuario.findOne({ clave });
            if (!user) {
                return { status: false, message: "No se encontro el usuario" }
            }
            const userput = await ENTMUsuario.updateOne(objput).where({ clave })

            return userput;
        },
    }
}

module.exports = MTUsuario