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
//req是一个可读流
app.post('/signup',function(req,res){
 var result = '';
 req.on('data',function(data){
   result += data.toString();
 });
 req.on('end',function(){
   res.end(result);
 });
});
// id 我们称为路径参数
app.get('/users/:id/:name',function(req,res){
  let id = req.params.id;
  let name = req.params.name;
  res.end(id+name);
});
//next表示继续执行的意思
//可以在param里把路径参数进行处理，比如把字符串转成数字
app.param('num1',function(req,res,next,num1){
  //把字符串转成数字赋给了请求对象的num1属性
   req.num1 = parseInt(num1);
   next();//表示继续向下执行
})
app.param('num2',function(req,res,next,num2){
  //把字符串转成数字赋给了请求对象的num1属性
  req.num2 = parseInt(num2);
  next();//表示继续向下执行
})
//num1 2 是两个占位符 表示匹配路径 /add/任意字符串/任意字符串
app.get('/add/:num1/:num2',function(req,res){
  res.end('和是:'+(req.num1+req.num2));
});
app.get('/minus/:num1/:num2',function(req,res){
  res.end('差是'+(req.num1-req.num2));
});

app.listen(8080);
