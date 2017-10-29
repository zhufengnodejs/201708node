let express = require('express');
//这个中间件能获取请求头中的cookie字段，并且把它转成一个对象，然后赋给req.cookies
let cookieParser = require('cookie-parser');
let app = express();
//使用此中间件之后，req请求对象多了一个cookies属性
app.use(cookieParser());
app.get('/write',function(req,res){
  //1.不指定任何参数
  //res.cookie('name','zfpx');
  //2.指定域名，指定这个cookie归谁所有,当向哪个域名发请求的时候才会带上此cookie,默认值是当前域名
  // a.zfpx.cn b.zfpx.cn 都指向本地127.0.0.1
  // 配置host文件
  //Set-Cookie:name=zfpx; Domain=a.zfpx.cn; Path=/
  /*res.cookie('name','zfpx',{
    domain:'a.zfpx.cn'
  });*/
  //============================================!
  // Path 指定路径
  // 如果指定了cookie的路径，那么只有当客户端再次向服务器发送 指定路径的请求时才会发送cookie，其它路径不发放
  res.cookie('name','zfpx',{path:'/read1'});
  res.send('write ok');
});

app.get('/read1',function(req,res){
   // name=zfpx querystring.parse(str);
   res.json(req.cookies);
});
app.get('/read2',function(req,res){
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
app.get('/clear',function(req,res){
  // Set-Cookie visit=
  res.clearCookie('visit');
  res.send('重置访问次数');
});
//
app.listen(8080);