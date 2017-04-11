　　   this是函数运行时，自动生成的一个内部对象，只能在函数内部使用。随着函数使用场合的不同，this的值会发生变化。
   但是有一个总的原则，那就是**this指的是，调用函数的那个对象**。
　　1.this指代全局对象Global：
　　
```
　  var x = 1; 
　　function test(){ 
　　　　console.log(this.x); 
　　} 
　　test(); // 1 
```
2.某个对象的方法调用时,this指上级对象:

```
　　function test(){ 
　　　　console.log(this.x); 
　　  } 
　　var o = {}; 
　　o.x = 1; 
　　o.m = test; 
　　o.m(); // 1 
```
3.构造函数调用时，指向新对象：

```
   var x = 2; 
　　function test(){ 
　　　　this.x = 1; 
　　} 
　　var o = new test(); 
　　console.log(o.x);  //1
　　alert(x); //2 
```
4.apply方法调用时，this指的是第一个参数：

```
var x = 0; 
　　function test(){ 
　　　　alert(this.x); 
　　} 
　　var o={}; 
　　o.x = 1; 
　　o.m = test; 
　　o.m.apply(); //0 
　　o.m.apply(o);  //1
```
**apply()的参数为空时，默认调用全局对象.**

　　 
