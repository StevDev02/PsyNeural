const { GraphQLSchema, GraphQLObjectType } = require("graphql");

// Queries
const { QYUsuario, QYBobeda } = require('../core/queries')
// Mutation
const MTConfiguracion = require('../core/mutations/mtconfiguracion')
const MTAsistente = require('../core/mutations/mtasistente')
const MTBobeda = require('../core/mutations/bobeda/mtbobeda')
const MTBobedaprm = require('../core/mutations/bobeda/mtbobeda_prm')
const MTBobedant = require('../core/mutations/bobeda/mtbobeda_nt')
const MTUsuario = require('../core/mutations/mtusuario')
// Define QueryType
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Queries",
    fields: {
        perfil: QYUsuario,
        mis_bobedas: QYBobeda,
    },
});

// Define MutationType
const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    fields: {
        MTConfiguracionPOST: MTConfiguracion.POST,
        MTAsistentePOST: MTAsistente.POST,
        MTBobedaPOST: MTBobeda.POST,
        MTBobedaprmPOST: MTBobedaprm.POST,
        MTBobedantPOST: MTBobedant.POST,
        //
        MTConfiguracionDEL: MTConfiguracion.DEL,
        MTAsistenteDEL: MTAsistente.DEL,
        MTBobedaDEL: MTBobeda.DEL,
        //
        MTBobedaPUT: MTBobeda.PUT,
        MTBobedaprmPUT: MTBobedaprm.PUT,
        MTBobedantPUT: MTBobedant.PUT,
        MTUsuarioPUT: MTUsuario.PUT
    },
});
const schemadentro = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});
module.exports = schemadentro
