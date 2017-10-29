/**
 * GET /user/signup
 * POST /user/signup
 * GET /user/signin
 * POST /user/signin
 **/
let express = require('express');
let router = express.Router();
//此数组保存着所有的用户信息 {username,password}
let users = [];
router.get('/signup',function(req,res){
  //此路径是相对于模板根目录的子路径，后缀是可以省略
  //读取写入的消息，然后通过模板渲染显示在页面上
  /*let error = req.cookies.error;
  res.clearCookie('error');*/
  let error = req.session.error;
  req.session.error = null;
  res.render('signup',{title:'用户注册',error});
});
//接收用户的注册表单数据并保存后台(内存，文件 ，数据库)
router.post('/signup',function(req,res){
   let user = req.body;
   let exists = users.some(item=>item.username == user.username);
   if(exists){
     //back是一个关键字，表示从哪来，滚回哪去,回到上一个页面
     //应该的此通过cookie保存一个消息提示信息
     //res.cookie('error','用户名已经被占用，请你换个别的用户名吧！');
     req.session.error = '用户名已经被占用，请你换个别的用户名吧！';
     res.redirect('back');
   }else{
     users.push(user);//添加到用户列表中去，表示注册成功
     res.redirect('/user/signin');
   }
});
router.get('/signin',function(req,res){
  let error = req.session.error;
  res.render('signin',{title:'用户登录',error});
});
router.post('/signin',function(req,res){
  let user = req.body;
  //当数组中有一个用户的用户名和密码跟本次输入的用户名和密码一样的话，则认为登录成功，跳到首页，否则登录失败，跳回登录页
  let exist = users.some(item=>item.username == user.username && item.password == user.password);
  if(exist){
    //登录成功之后把用户名保存在session中
    req.session.username = user.username;
    res.redirect('/');
  }else{
    req.session.error = '用户名或密码错误';
    res.redirect('back');
  }
});
router.get('/signout',function(req,res){
  req.session.username = null;
  res.redirect('/');
});
//判断用户是否登录，如果已经登录，则继续访问此路由，如果未登录，跳到登录页
router.get('/private',function(req,res){

});
module.exports = router;