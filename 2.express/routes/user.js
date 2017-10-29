/**
 * GET /user/signup
 * POST /user/signup
 * GET /user/signin
 * POST /user/signin
 **/
let express = require('express');
let router = express.Router();
router.get('/signup',function(req,res){
  //此路径是相对于模板根目录的子路径，后缀是可以省略
  res.render('signup',{title:'用户注册'});
});
module.exports = router;