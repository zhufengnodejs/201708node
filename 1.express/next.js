//next原理
let stack =[
  function(req,res,next){
    console.log(1);
    next();
  },
  function(req,res,next){
    console.log(2);
    next();
  },
  function(req,res,next){
    console.log(3);
    next();
  }
]
let i=0;
function next(){
  let fn = stack[i++];
  if(fn)
    fn(null,null,next);
}
next();