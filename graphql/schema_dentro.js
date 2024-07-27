const { GraphQLSchema, GraphQLObjectType } = require("graphql");

// Queries
const { QYUsuario, QYBobeda } = require('../core/queries')
// Mutation
const MTConfiguracion = require('../core/mutations/mtconfiguracion')
const MTAsistente = require('../core/mutations/mtasistente')
const MTBobeda = require('../core/mutations/bobeda/mtbobeda')
const MTBobedaprm = require('../core/mutations/bobeda/mtbobeda_prm')
const MTBobedant = require('../core/mutations/bobeda/mtbobeda_nt')
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
    },
});
const schemadentro = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});
module.exports = schemadentro
