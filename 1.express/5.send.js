let express = require('express');
let path = require('path');
let app = express();
let users = [{id:1,name:'zfpx1'}];
//send方法可以接收任何的类型参数 字符串 Buffer 对象 数组 数字
app.get('/users',function(req,res){
  //主要是数据类型转换，把其它类型都转成end能处理的类型，就是字符串或者Buffer
  //res.send(users);
  //向客户端发送一个JSON格式的数据 Content-Type:application/json
  res.json(users);
});
app.get('/users2',function(req,res){
  //把服务器的一个文件发送给客户端
  //path must be absolute or specify root to res.sendFile
  //路径必须是绝对路径或者指定root根目录
  //res.sendFile(path.resolve('./users.json'));
  res.sendFile('./users.json',{root:__dirname});
});
//返回一个状态 404
app.get('/other',function(req,res){
  //res.statusCode = 404;
  //用来设置响应状态码
  //res.status(404);
  //不但发送响应状态码，还结束响应
  res.sendStatus(404);
});

app.listen(8080);