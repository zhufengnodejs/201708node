/**
 * 获取请求参数 回顾一下请求的组成
 * 请求行 GET /user HTTP/1.1    请求方法名 请求路径  协议/版本号
 * 请求头 ContentType text/html;charset=utf8
 * 请求体
 */
let express = require('express');
let app = express();
// http://localhost:8080/signup?name=zfpx&age=9
app.get('/signup',function(req,res){
  //获取请求的方法名  跟原生一样
  //其实这个req和以前用的http模块里的请求对象是同一个对象，只不过多了一些方法和属性
  console.log(req.method);
  console.log(req.url);//完整URL路径，包括路径名(pathname)+查询字符串query /signup?name=zfpx&age=9
  console.log(req.path);//就相当于路径名，就是端口号和问号中间那部分 /signup
  //只有原来没有，或者原来有，但是不好用，才会添加新的
  console.log(req.query);// {name:'zfpx',age:9}
  console.log(req.headers);//请求头对象
  //此方法功能和用法 就相当于原先的res.setHeader
  res.header('Content-Type','text/html;charset=utf8');
  res.end(`
    <form action="/signup" method="POST">
    用户名 <input type="text" name="name"><br/>
    密码 <input type="text" name="password"><br/>
    <input type="submit">
    </form>
  `);
});
app.listen(8080);
