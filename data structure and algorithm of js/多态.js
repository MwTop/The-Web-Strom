var makeSound = function(animal) {
	animal.sound();
}

var Duck = function(){};
Duck.prototype.sound = function(){
	console.log("嘎嘎嘎");
}

var Dog = function(){};
Dog.prototype.sound = function(){
	console.log("汪汪汪");
}

makeSound(new Duck());
makeSound(new Dog());
/*
    所谓JavaScript中的‘多态’是指同一个指令对于不同的对象使用后会产生不一样的执行结果。
    一个简单的例子就是让不同的动物都发出声音会听见不同的喊叫声。
*/
