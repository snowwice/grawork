'use strict';
const Koa = require('koa');
const mongo = require('koa-mongo');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();


app.use(mongo());
// app.use(async (ctx, next) => {
//   ctx.body = await ctx.mongo.db('grawork').collection('index').find().toArray();
//   console.log("www");
// });

router.get('/index', async(ctx) => {
    ctx.body = await ctx.mongo.db('grawork').collection('index').find().toArray();
    // await next();
});

router.get('/subject', async(ctx) => {
    ctx.body = await ctx.mongo.db('grawork').collection('subject').find().toArray();
});

app.use(router.routes())
    .use(router.allowedMethods());

// app.use(ctx => {
//   ctx.body = "www";
// 	ctx.body = ctx.request;
// 	console.log(ctx.body);
// });

app.listen(3000);