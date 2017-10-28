/**
 * 模板
 * 由静态的模板文件+动态的内容=渲染出来的HTML字串
 */
let express = require('express');
let path = require('path');
let app = express();
//设置模板引擎
//set用来设置一些变量的值，比如说这里的模板引擎
//模板引擎的值和模板的后缀要一定
app.set('view engine','html');
//设置模板存放的根目录
app.set('views',path.resolve('views'));
//指定html类型的模板还是使用ejs模板引擎来进行渲染
app.engine('html',require('ejs').__express)
//当客户端访问/的时候，执行对应的回调函数
app.get('/',function(req,res){
  //render是用来把静态的模板文件和动态的数据对象关联的过程
  //1 参数是模板存放的相对路径
  //1. .是指的是模板存放的根目录，而非当前模块所在目录
  //2. 后缀可以不写，找模板的时候会自动添加后缀 .ejs
  //title is not defined title这个变量在对象里没有对应的属性
  res.render('./index',{title:'首页',users:[
    {id:1,name:'zfpx1'},{id:2,name:'zfpx2'}
  ],msg:'<h1>hello</h1>'});
});
app.listen(8080);
/**
 * <%=xx%>
 *
 **/