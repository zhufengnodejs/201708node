const express = require('express');
const app = express();
let cookieParser = require('cookie-parser');
let session = require('express-session');
const index = require('./routes/index');
const user = require('./routes/user');
//用来解析请求体的，它会把请求体的数据变成一个对象赋给req.body
let bodyParser = require('body-parser');
let path  = require('path');
//设置模板引擎 决定模板后缀
app.set('view engine','html');
//设置模板的存放根目录
app.set('views',path.resolve('views'));
//设置模板的渲染方法
app.engine('html',require('ejs').__express);
//服务器是通过请求头中Content-Type字段来得到请求体的格式
//客户端传过来的请求体格式多种多样。有查询字符串格式 username=1&password=2, querystring.parse()
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//也有可能是JSON格式 JSON.parse()
// application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:'zfpx'
}));
//res.render
//当请求路径以/开头的时候，走index中间件
app.use('/',index);
//当请求路径以/user开头的时候，走user中间件
app.use('/user',user);
app.listen(8080);