function Stack(){
	this.dataStore = [];
	this.top=0;
    this.push=push;
    this.pop=pop;
    this.peek=peek;
    this.length=length;
    this.clear=clear;
}

function push(element){
	this.dataStore[this.top++]=element;
}
function pop(){
	return this.dataStore[--this.top];
}
function peek(){       //返回栈顶元素
	return this.dataStore[this.top-1]  
}

function length(){
	return this.top;
}
function clear(){
	this.top = 0;
}

var s = new Stack();
s.push("D");
s.push("E");
s.push("F");
console.log("length:"+s.length());
 console.log(s.peek());
var popped=s.pop();
console.log("popped element is:"+popped);
console.log(s.peek());
s.clear();
console.log("length:"+s.length());
console.log(s.peek());
s.push("F");
console.log(s.pop());
