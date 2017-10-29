let express = require('express');
let router = express.Router();
router.get('/',function(req,res){
  //可以接收任意类型的参数，并且可以处理编码问题
  res.send(`欢迎${req.session.username}登录`);
});
module.exports = router;