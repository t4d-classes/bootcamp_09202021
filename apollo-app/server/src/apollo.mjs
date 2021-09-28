import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './typeDefs.mjs';
import { resolvers } from './resolvers.mjs';

const apolloServerConfig = {
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    return {
      req,
      res,
      restUrl: process.env.REST_URL,
    };
  },
  dataSources: () => ({}),
};

let apollo = null;

export const getApollo = async () => {
  if (!apollo) {
    apollo = new ApolloServer(apolloServerConfig);
    await apollo.start();
  }

  return apollo;
}




