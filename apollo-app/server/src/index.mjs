import http from 'http';
import dotenv from 'dotenv';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';

import { typeDefs } from './typeDefs.mjs';
import { resolvers } from './resolvers.mjs';

dotenv.config();

import { logger } from './logger.mjs';
import { getApp } from './app.mjs';
import { getApollo } from './apollo.mjs';

getApp().then((app) => {

  const server = http.createServer(app);

  let subscriptionServer = null;

  server
    .listen(process.env.PORT, () => {
  
      subscriptionServer = new SubscriptionServer({
        execute,
        subscribe,
        typeDefs,
        resolvers,
      }, {
        server: server,
        path: '/subscriptions',
      });

      console.log(subscriptionServer.wsServer.options.path);
  
    })
    .on('listening', async () => {
      logger.info(
        `web server listening on port http://localhost:${process.env.PORT}${(await getApollo()).graphqlPath}`,
      );
      logger.info(
        `web socket server listening on port ws://localhost:${process.env.PORT}${subscriptionServer.wsServer.options.path}`,
      );
    })
    .on('error', (err) => {
      console.log(err);
    });

});

