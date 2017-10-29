const express = require('express');
const app = express();
const index = require('./routes/index');
const user = require('./routes/user');
let path  = require('path');
//设置模板引擎 决定模板后缀
app.set('view engine','html');
//设置模板的存放根目录
app.set('views',path.resolve('views'));
//设置模板的渲染方法
app.engine('html',require('ejs').__express);
//res.render
//当请求路径以/开头的时候，走index中间件
app.use('/',index);
//当请求路径以/user开头的时候，走user中间件
app.use('/user',user);
app.listen(8080);