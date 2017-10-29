/**
 * 1.当客户端第一次访问服务器的时候，服务器向客户端种植一个cookie
 *    通过响应头  Set-Cookie name=zfpx
 *
 */
let http = require('http');
let server = http.createServer(function(req,res){
   let url = req.url;
   //表示服务器向客户端写入cookie
   if(url == '/write'){
     //服务器会向客户端发送一个响应头，客户端收到这个cookie后会很小心的认真的把这个cookie保存在浏览器里
      res.setHeader('Set-Cookie','name=zfpx');
      res.end('write ok');
   }else if(url == '/read'){
     //当客户端再次访问服务器的时候，客户端会把上次保存cookie带上，通过请求中的`Cookie`字段发回给服务器，服务器可以接收并读取
     let cookie = req.headers.cookie;
     res.end(cookie);
   }else{
     res.end('Not Found');
   }
});
server.listen(8080);
