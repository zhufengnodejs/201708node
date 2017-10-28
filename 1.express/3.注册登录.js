let express = require('express');
let fs = require('fs');
let app = express();
//当客户端通过GET方式访问服务器/signup路径时候，返回一个注册表单
app.get('/signup',function(req,res){
  fs.readFile('./signup.html',function(err,data){
    res.end(data);
  })
});
app.post('/signup',function(req,res){
  res.setHeader('Content-Type','text/html;charset=utf8');
  res.end('提交注册表单');
});
app.listen(8080);