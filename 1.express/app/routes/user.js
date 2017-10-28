/**
 * 定义路由中间件
 * 中间件里定义用户相关的路由
 */
let express = require('express');
//调用Router方法会返回一个路由对象 就是路由中间件
let router = express.Router();
//路由中间件的用法和app很像 mini-app
router.get('/signup',function(req,res){
  res.send('注册');
});
router.post('/signup',function(req,res){
  res.send('提交注册');
});
module.exports = router;

