"use strict";

module.exports = function(config) {
  const Router = require('@koa/router');
  const router = new Router();

  router
    .get('/', (ctx, next) => {
        ctx.body = 'This is root.'
    })
    .get('/user', (ctx, next) => {
        ctx.body = `This is ${config.user}.`
    })
    .get('/staff', (ctx, next) => {
        ctx.body = `This is ${config.staff}.`
    })
    .get('/admin', (ctx, next) => {
        ctx.body = `This is ${config.admin}.`
    })

  return router.routes();
}