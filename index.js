class Node {
	constructor(value = null, prev = null, next = null) {
		this.value = value;
		this.prev = prev;
		this.next = next;
	}
}
class LinkedList {
	constructor() {
		this.tail = null;
		this.head = null;
	}

	append(value) {
		const newNode = new Node(value);
		if(!this.tail) {
			this.head = newNode;
			this.tail = newNode
		} else {
			let oldTail = this.tail;
			this.tail = newNode;
			oldTail.next = newNode
			this.tail.prev = oldTail;
		}
	}

	prepend(value) {
		const newNode = new Node(value);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			 let oldHead = this.head;
			 this.head = newNode;
			 oldHead.prev = newNode;
			 this.head.next = oldHead;

		}
	}

	deleteHead() {
		if(!this.head) {
			return null;
		} else {
			let deleted = this.head;
			if(this.head === this.tail) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = this.head.next;
				this.head.prev = null;
			}
			return deleted.value;
		}

	}

	deleteTail() {
		if(!this.tail) {
			return null;
		} else {
			let deleted = this.tail;
			if(this.head === this.tail) {
				this.head = null;
				this.tail = null;
			} else {
				this.tail = this.tail.prev;
				this.tail.next = null
			}
			return deleted.value;
		}
	}

	search(value) {
		
		let curr = this.head;

		while(curr.next) {
			if(curr.value === value) {
				return curr.value;
			}
			curr = curr.next;
		}

		return null; 
	}
}

let myLL = new LinkedList();

myLL.append(1);
myLL.append(2);
myLL.append(3);
myLL.append(4);
myLL.append(5);
myLL.append(6);


console.log(myLL);

console.log('------ Search -------');

const valueFound = myLL.search(4);

console.log('Value found: ', valueFound);

console.log('------ Delete Tail -------');

const tailDeleted = myLL.deleteTail();

console.log('Tail delted: ', tailDeleted);

console.log('------ Delete Head -------');

const headDeleted = myLL.deleteHead();

console.log('Head delted: ', headDeleted);