// 使用koa-router进行文件路由

const Koa = require('koa');
const app = new Koa();
const router = require('../routers/index');

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
});