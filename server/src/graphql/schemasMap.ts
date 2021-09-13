import 'graphql-import-node'
import * as personTypeDefs from './schemas/person.graphql'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolversMap'
import { GraphQLSchema } from 'graphql'
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [personTypeDefs],
  resolvers
})
export default schema
