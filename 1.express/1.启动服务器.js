//1.引入express模块,用来帮助我们创建http服务器
let express = require('express');
//express是一个函数，需要执行才能得到应用的实例
//app其实也是一个函数
let app = express();
//在本机的8080端口上监听客户端的请求
//请求监听函数，当客户端向服务器发请请求时执行的回调函数
app.listen(8080,function(){
  console.log('服务器已经启动，监听8080端口');
});

/*app.listen = function listen(port) {
  var server = require('http').createServer(app);
  server.listen(port);
};*/


