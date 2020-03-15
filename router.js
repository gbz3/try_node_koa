"use strict";

module.exports = function() {
  const Router = require('@koa/router');
  const router = new Router();

  router
    .get('/', (ctx, next) => {
        ctx.body = 'This is root.'
    })
    .get('/sub', (ctx, next) => {
        ctx.body = 'This is sub-dir.'
    })

  return router.routes();
}