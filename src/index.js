// 快速启动koa2

const Koa = require('koa');
const app = new Koa();

app.use( async ( ctx ) => {
  ctx.body = 'hello world from koa2.'
});

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');