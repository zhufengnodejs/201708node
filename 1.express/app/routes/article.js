/**
 * 定义路由中间件
 * 中间件里定义文章相关的路由
 */
let express = require('express');
let router = express.Router();

router.get('/add',function(req,res){
  res.send('添加文章');
});
// /article/add/comment  增加评论

module.exports = router;