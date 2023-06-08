const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const knex = require('knex');
const knexConfig = require('./knexfile');

const app = new Koa();
const router = new Router();
const db = knex(knexConfig.development);

app.use(bodyParser());

// Define your routes here using the router

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
