let Socket = require('ws');
//当new Socket实例的时候已经开始连接服务器了
let socket = new Socket('ws://localhost:8080');
//当连接成功建立的时候
socket.on('open',function(){
  console.log('客户端连接成功');
  //客户端向服务器说了声 你好
  socket.send('你好');
});
//客户端监听服务器的消息
socket.on('message',function(data){
  console.log(data);
});