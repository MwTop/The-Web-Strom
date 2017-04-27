/*
   对于某个无序数组，规定一种排序方法：从左到用开始只要第一个数比第二个数大，则将它去除插入到数组最后面,知道整个数组有序
*/ 

var m=1;
  var key;
  var ans=0;
  var token=[19,8,7,20];
    l = token.length;
    console.log(l);
    while(m!=0){
         m=0;
         for (var i = 0; i < token.length-1; i++) {
         	if(token[i]>token[i+1]){
         		key = token[i];
         		for (var j = i; j<token.length-1;j++) {
         			token[j] = token[j+1];
         		}
         		console.log(l);
         		token[l-1] = key;
         		ans++;
         		m = 1;
         		console.log(token);
         	}
         }
    }
    console.log(ans);
