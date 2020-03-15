"use strict";

const Koa = require('koa');
const app = new Koa();

app.use(require('./router')());

app.listen(3000);
