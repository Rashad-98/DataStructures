class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = null;
        this.head = null;
        this.tail = null;
    }

    incrementLength() {
        if(this.length === null) {
            this.length = 1;
        } else {
            this.length++;
        }
    }

    updateHead(node) {
        this.head = node; 
    }

    updateTail(node) {
        this.tail = node;
    }

    push(value) {
        const node = new Node(value);
        this.incrementLength();
        if(this.head === null) {
            this.updateHead(node);
        }
        node.previous = this.tail;
        if(!(this.tail === null)) {
            this.tail.next = node;
        }
        this.updateTail(node);
    }
}


const myDoublyLinkedList = new DoublyLinkedList();
console.log(myDoublyLinkedList);

myDoublyLinkedList.push('hahaa');
console.log(myDoublyLinkedList);


myDoublyLinkedList.push('lalal');
console.log(myDoublyLinkedList);

myDoublyLinkedList.push('zewzew');
console.log(myDoublyLinkedList);

//Everything went ok with the push method.