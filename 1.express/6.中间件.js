/**
 * 处于请求和路由中间
 */
let express = require('express');
let app = express();
let fs = require('fs');

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
  // setTimeout(function(){
  //   next();
  // },3000);
  //读取一个文件的内容，并把读到的结果赋给req.msg
  fs.readFile('1.txt','utf8',function(err,data){
    //如果在中间件中出错的话应该交给统一的处理函数来处理
    if(err){
      //同样调用next继续执行，但是会传入错误对象
      //如果next的参数不为null就表示有错误了，则会跳过正常的业务逻辑，交由错误处理中间件来处理
      next(err);
    }else{
      req.msg = data;
      next();
    }

  });
});
app.use(function(req,res,next){
  console.log('中间件2');
  next();
});

app.get('/',function(req,res){
  res.end('首页');
});
app.get('/user',function(req,res){
  res.end('用户管理');
});
//错误处理中间件多了一个参数，err
app.use(function(err,req,res,next){
  console.error(err);
});
app.listen(8080);