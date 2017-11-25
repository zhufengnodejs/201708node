let mongoose = require('mongoose');
mongoose.Promise = Promise;
//其实我们操作数据库是操作数据库里集合
//1.连接数据库,返回一个连接对象
//提供数据库的地址 协议://域名或IP:端口号
//数据库的名字可以随便写，事先不需要提前创建 local admin
let connection = mongoose.createConnection("mongodb://localhost/201708node");
//2. 定义数据库集合的骨架模型,规定集合中文档的字段名称和类型
//并没有跟数据库交互的能力
let UserSchema = new mongoose.Schema({
   name:String,
   age:Number
})
//connection的model方法用来创建模型
//当保存数据库的时候，集合的名字来自于模型名->小写->复数(users)
let UserModel = connection.model('User',UserSchema);

//向集合中插入一个文档,因为操作数据库很慢，所以此方法是异步的
/*UserModel.create({name:'zfpx',age:9},function(err,doc){
  console.log(err);//错误对象，如果说出错了，会放错误的原因
  console.log(doc);//保存后的文档对象
  //{ __v: 0, name: 'zfpx', age: 9, _id: 5a18d790e101f615d44905ad }
});*/
// __v 这是内部使用用来解决并发问题的一个锁
// _id 它叫主键，是一个文档最主要的键，用来唯一的标识一个文档,它的是值是mongodb自动生成的，而且永远是全球唯一的。
// 主键是与业务无关，是永远不变的

//更新 update
//1参数是一个查询条件 用来指定更新的范围
//2参数是指定更新后的值
//更新只会匹配一条,加上multi:true之后表示更新所有匹配的条数
/*UserModel.update({name:'zfpx'},{age:10},{multi:true},function(err,result){
  console.log(err);// null
  //ok=1表示成功 nModified=1表示实际更新文档数 n=1表示符合条件的记录数
  console.log(result);// { ok: 1, nModified: 1, n: 1 }
});*/
//删除
/*UserModel.remove({name:'zfpx'},function(err,result){
  console.log(err);
  //{ ok: 1, n: 0 } ok表示操作成功 n表示实际删除的条数
  console.log(result.result);
});*/
/*
let users = [];
for(let i=1;i<=10;i++){
  users.push({name:'zfpx'+i,age:i});
}
UserModel.create(users,function(err,docs){
  console.log(docs);
})*/

//$gt 大于 greater than 小于 less than
UserModel.find({age:2},function(err,docs){
  console.log(docs);
});
//分页 按age倒序排序，每页3条，取第2页
// sort对结果进行排序，按age字段排序， -1 倒序 1升序
// skip跳过前三条 limit 表示最多取3条
// exec时才会真正把请求发给数据库执行
UserModel.find({}).sort({age:-1}).skip(3).limit(3).exec(function(err,docs){
  console.log(docs);
});