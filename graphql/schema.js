const { GraphQLSchema, GraphQLObjectType } = require("graphql");

// Queries
const { QYRoot } = require('../core/queries')
// Mutations
const MTUsuario = require('../core/mutations/mtusuario')

// Define QueryType
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: { root: QYRoot },
});

// Define MutationType
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {
    MTUSERregister: MTUsuario.register,
    MTUSERlogin: MTUsuario.login,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
