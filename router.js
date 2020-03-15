"use strict";

module.exports = function(config) {
  const Router = require('@koa/router');
  const router = new Router();

  router
    .get('/', (ctx, next) => {
        ctx.body = 'This is root.'
    })
    .get('/user', (ctx, next) => {
        ctx.body = `This is ${config.users.find(o => o.username === 'user').username}.`
    })
    .get('/staff', (ctx, next) => {
        ctx.body = `This is ${config.users.find(o => o.username === 'staff').username}.`
    })
    .get('/admin', (ctx, next) => {
        ctx.body = `This is ${config.users.find(o => o.username === 'admin').username}.`
    })

  return router.routes();
}