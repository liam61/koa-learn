// get获取数据

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  let url = ctx.url;

  // 从上下文的request对象中获取
  let request = ctx.request;
  let req_query = request.query;
  let req_queryString = request.querystring;

  // 从上下文中直接获取
  let ctx_query = ctx.query;
  let ctx_queryString = ctx.querystring;

  ctx.body = {
    url,
    req_query,
    req_queryString,
    ctx_query,
    ctx_queryString
  }
});

app.listen(3000, () => {
  console.log('[demo] request get is starting at port 3000')
})