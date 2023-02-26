
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
for (i=0;i<result.length;i++){
    // console.log("& flag :",result[i].flag);
    console.log("County:",result[i].name,"& Region:",result[i].region,"& Sub-Region:",result[i].subregion,"&Population:",result[i].population);
// console.log("County:",result[i].name,"& flag :",result[i].flag);
// // }
// // }
//   console.log(result);

}}  