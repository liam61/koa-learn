// post获取请求参数

const Koa = require('koa');
const app = new Koa();

app.use( async ( ctx ) => {
  if ( ctx.url === '/' && ctx.method === 'GET' ) {
    // 当GET请求时候返回表单页面
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `;
    ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
      // 当POST请求的时候，解析POST表单里的数据，并显示出来
      let postData = await parsePostData(ctx);
      ctx.body = postData;
    } else {
      ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
  });

// 解析上下文里node原生请求的POST参数
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";

      // 监听post的data（数据传送）事件，如果post数据很长会分段
      // 用postdata去保存之前的数据，然后 += 现在的数据
      ctx.req.addListener('data', (data) => {
        postdata += data
      });
      ctx.req.addListener("end",function(){ // post传输按成后，进行解析
        let parseData = parseQueryStr( postdata )
        resolve( parseData )
      });
    } catch ( err ) {
      reject(err)
    }
  });
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr(queryStr) {
  console.log(queryStr);

  let queryData = {};
  let queryStrList = queryStr.split('&');
  console.log(queryStrList);

  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('='); // 拆分成键值对
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }

  return queryData;
}

app.listen(3000, () => {
  console.log('[demo] request post is starting at port 3000')
})
