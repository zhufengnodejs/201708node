/**
 * 处于请求和路由中间
 */
let express = require('express');
let app = express();
/**
 * 中间件其实是一个函数
 * use表示使用一个中间件函数
 * 中间件用来执行一些公共的逻辑
 * next是一个方法，表示继续向下执行
 */
app.use(function(req,res,next){
  console.log('中间件1');
  res.header('Content-Type','text/html;charset=utf8');
  //因为我们的代码中可能会有异步逻辑，不能认为代码执行结束整个任务就结束了.
  //所以需要调用next方法来表示任务执行结束
  setTimeout(function(){
    next();
  },3000);
});
app.use(function(req,res,next){
  console.log('中间件2');
  res.header('Content-Type','text/html;charset=utf8');
  next();
});
app.get('/',function(req,res){
  res.end('首页');
});
app.get('/user',function(req,res){
  res.end('用户管理');
});
app.listen(8080);