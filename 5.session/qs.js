let obj = {name:'zfpx',age:8,home:{
  country:'china',
  city:'bejing'
}};
//let querystring = require('querystring');
let qs = require('qs');
let str = qs.stringify(obj);
console.log(str);
let obj2 = qs.parse(str);
console.log(obj2);
