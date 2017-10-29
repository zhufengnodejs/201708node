let express = require('express');
//这个中间件能获取请求头中的cookie字段，并且把它转成一个对象，然后赋给req.cookies
let cookieParser = require('cookie-parser');
let app = express();
//使用此中间件之后，req请求对象多了一个cookies属性
app.use(cookieParser());
app.get('/write',function(req,res){
  res.cookie('name','zfpx');
  res.send('write ok');
});

app.get('/read',function(req,res){
   // name=zfpx querystring.parse(str);
   res.json(req.cookies);
});
//统计每个客户端访问服务器的次数
app.get('/visit',function(req,res){
   //1.先试图获取客户端的cookie里的访问次数
   let visit = req.cookies.visit||0;
   //2.把访问次数+1
   visit++;
   //3.把最新的访问次数写回客户端
   res.cookie('visit',visit);
   res.send(`欢迎你的第${visit}次访问`);
});
//
app.listen(8080);