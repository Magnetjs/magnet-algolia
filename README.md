### Usage

[![Greenkeeper badge](https://badges.greenkeeper.io/Magnetjs/magnet-algolia.svg)](https://greenkeeper.io/)
All Algolia api should refer [algoliasearch](https://github.com/algolia/algoliasearch-client-javascript)

Basic
```
import magnet from 'magnet-core';
import Config from 'magnet-config';
import Logger from 'magnet-bunyan';
import Server from 'magnet-spdy';
import Session from 'magnet-session';
import Router from 'magnet-router';
import Algolia from 'magnet-algolia';

let app = await magnet([Config, Logger, Server, Session, Router, algolia]);
```

server/controllers/user.js
```
export default function user({ router, algolia }) {
  router

  .get('/users', async function (ctx) {
    var index = algolia.initIndex('users');

    index.search('Atlenta', function(err, results) {
      if (err) {
        throw err;
      }

      console.log('We got `' + results.nbHits + '` results');
      console.log('Here is the first one: ', results.hits[0]);

      // call client.destroy() this when you need to stop the node.js client
      // it will release any keepalived connection
      algolia.destroy();
    });
    ctx.body = [];
  })

  .post('/user', async function (ctx) {
    ctx.body = ctx.request.body;
  })

  .put('/user/:userId', async function (ctx) {
    ctx.body = ctx.params;
  })

  .get('/user/:userId', async function (ctx) {
    ctx.body = ctx.query;
  });
}
```
