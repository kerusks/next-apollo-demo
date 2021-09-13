import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import schema from './graphql/schemasMap';
import { GraphQLSchema } from 'graphql'
import express from 'express';
import http from 'http';
import cors from 'cors';

const startApolloServer = async (schema: GraphQLSchema) => {
  const port = process.env.PORT || 5000
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise(resolve => httpServer.listen({ port }, resolve));
  console.log(`Graphql Server started on: http://localhost:${port}${server.graphqlPath}`)
}

startApolloServer(schema);
