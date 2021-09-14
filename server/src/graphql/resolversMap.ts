import { IResolvers } from 'graphql-tools'
import { merge } from 'lodash'
import { PersonResolvers } from './resolvers/PersonResolver'

const resolverMap: IResolvers = merge(PersonResolvers)
export default resolverMap
