let express = require('express');
let router = express.Router();
router.get('/',function(req,res){
  //可以接收任意类型的参数，并且可以处理编码问题
  res.send('首页');
});
module.exports = router;