let express = require('express');
//这个中间件能获取请求头中的cookie字段，并且把它转成一个对象，然后赋给req.cookies
let cookieParser = require('cookie-parser');
let app = express();
//使用此中间件之后，req请求对象多了一个cookies属性
app.use(cookieParser());
app.get('/write',function(req,res){
  res.cookie('name','zfpx');
  res.send('write ok')
});

app.get('/read',function(req,res){
   // name=zfpx querystring.parse(str);
   res.json(req.cookies);
});
app.get('/visit',function(req,res){

});
//
app.listen(8080);