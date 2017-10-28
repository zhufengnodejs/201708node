let express = require('express');
let path = require('path');
let app = express();
/**
 * 中间件有个特色，加载别的中间件模块后得到的是一个函数，需要执行之后才可以调用
 * 需要一个静态文件根目录
 * 客户端访问的是路径刚好是静态文件根目录的子路径
 * /css/index.css
 * 中间件接收到请求后，先取得静态文件根目录，然后拼上客户端访问的路径,会得到被访问文件的绝对路径。再用fs模块读取此文件路径。读到内容后返回客户端
 */
/*function static(){

}*/
//在以前express自带了30多个中间件，从4.0开始基本上全部干掉了。只保留了一个express.static
//客户端访问服务器url路径跟服务器上硬盘的路径有必然的关系吗？
app.use('/static',express.static(path.resolve('public')));
//app.get('/static/css/index.css2');
app.listen(8080);