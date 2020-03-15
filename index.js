"use strict";

const fs = require('fs');
const Koa = require('koa');

const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
console.log(config)
const app = new Koa();

app.use(require('./router')(config));

app.listen(3000);
