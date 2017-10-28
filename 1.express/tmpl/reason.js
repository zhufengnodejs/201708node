let tmpl = ' <%=name%> is  <%=age%> years old';
let obj = {name:'zfpx',age:9};
function render(tmpl,obj){
  return tmpl.replace(/<%=(.+?)%>/g,function(matched,attr){
    return obj[attr];
  })
}
let html = render(tmpl,obj);
console.log(html);