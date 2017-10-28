/**
 * 路由中间件
 * 这是一个中间件，用来提供路由的功能
 * 解决的是路由的集中配置问题
 * 能否把不同的类型的路由配置到不同的文件里面去
 * 一个项目有很多的模块 user article
 **/
let express = require('express');
let user = require('./routes/user');
let app = express();
//当服务器收到客户端请求的时候，会判断请求路径是不是以/user开头，如果是以/user开头，会交给user中间件来处理
// /user/signup
app.use('/user',user);
app.listen(8080);