const router = require('koa-router')();

// 客户端如果访问 /api，怎会进来api router中，根据后面参数的不同，可请求data.json或者user.json
module.exports = router.get('/get/data.json', async (ctx) => {
  ctx.body = {
    success: true,
    data: {
      text: "hello world!"
    }
  }
}).get('/get/user.json', async (ctx) => {
  ctx.body = {
    success: true,
    data: {
      text: 'my name is koa.js!'
    }
  }
})