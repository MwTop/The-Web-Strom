//var student = ['qiang','ming','tao','li','liang','you','qiang','tao'];
var student = [1,2,2,2,3,4,4,5,6,6];
function unique1(arr){
var tmp = new Array();
 
for(var m in arr){
tmp[arr[m]]=1;
}
alert(tmp);
//再把键和值的位置再次调换
var tmparr = new Array();
 
for(var n in tmp){
tmparr.push(n);
}
return tmparr;
}
// var quarr=unique1(student);
// alert(quarr);

function unique2(arr){
   var Tarr=new Array();
   for (var i = 0; i < arr.length; i++) {
   	  if(Tarr.indexOf(arr[i])<0)
      Tarr.push(arr[i]);
   }
   return Tarr;
}  
var quarr2 = unique2(student); 
alert(quarr2);
