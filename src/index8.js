// koa2设置cookie
// 访问 http://localhost:3000/index

const Koa = require('koa');
const app = new Koa();

app.keys = ['secret', 'key']; // 如果要设置singed字段，即签名，要先设置app的keys字段

app.use( async ( ctx ) => {

  if ( ctx.url === '/index' ) {
    ctx.cookies.set(
      'cid2', 
      'hello world2',
      {
        domain: 'localhost',  // 写cookie所在的域名
        path: '/index',       // 写cookie所在的路径
        signed: true, // 签名
        maxAge: 10 * 60 * 1000, // cookie有效时长
        expires: new Date('2018-07-23'),  // cookie失效时间
        httpOnly: false,  // 是否只用于http请求中获取
        overwrite: false  // 是否允许重写
      }
    );
    ctx.body = 'cookie is ok';
  } else {
    ctx.body = 'hello world';
  }

});

app.listen(3000, () => {
  console.log('[demo] cookie is starting at port 3000');
})