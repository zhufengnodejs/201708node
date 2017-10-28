/**
 * 根据客户端的不同的请求路径返回不同的内容
 * 1.简单好维护
 * 2.结构清晰
 **/
let express = require('express');
let app = express();
//app上面也可以调用一些方法，用这个方法来定义路由
//在HTTP里有这些HTTP请求方法 GET POST PUT DELETE
//当客户端浏览器通过GET方法访问服务器/路径的时候，会由对应的监听函数来进行处理
//当服务器收到客户端请求后，先由app来进行处理。app不具体响应请求，而是进行判断应该由哪个路由来处理
app.listen(8080);
app.get('/',function(req,res){
  res.end('home');
});
app.get('/user',function(req,res){
  res.end('get');
});
// curl -X POST http://localhost:8080/user
app.post('/user',function(req,res){
  res.end('post');
});
app.put('/user',function(req,res){
  res.end('put');
});
app.delete('/user',function(req,res){
  res.end('delete');
});
