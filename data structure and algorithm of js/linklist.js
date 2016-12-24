//创建一个节点
function Node(element){
	this.element = element;
	this.next = null;
}

function find(item){
    var currNode = this.head;
    while(currNode.element!=item){
       currNode=currNode.next;
    }
    return  currNode;
}

function insert(newElement,item){
   var newNode = new Node(newElement);
   var current = this.find(item);
   newNode.next = current.next;
   current.next = newNode;
}

function display(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

//删除结点时需要找到其的前一个结点
function findPrevious(item){
	var currNode=this.head;
	while(!(currNode.next == null) && (currNode.next.newElement!=item)){
		currNode =currNode.next;
	}
	return currNode;
}

function remove(item){
	var prevNode = this.findPrevious(item);
	if(!(prevNode.next==null)){
		prevNode.next=prevNode.next.next;
	}
}
//链表的操作方法
function Llist(){
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.findPrevious=findPrevious;
	this.remove = remove;
	this.display = display;
}

var list = new Llist();
list.insert("wang","head");
list.insert("li","wang");
list.display();
list.remove("li");
list.display();