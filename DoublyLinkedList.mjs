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

    pop() {
        const node = this.tail;
        if(this.length === null) {
            return undefined;
        }
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = null;
            return node;
        }
        this.tail = node.previous;
        this.tail.next.previous = null;
        this.tail.next = null;
        this.length--;
        return node;
    }
}

// const myDoublyLinkedList = new DoublyLinkedList();
// myDoublyLinkedList.push('hahaa');
// // const myNode = myDoublyLinkedList.pop();
// // console.log(myNode);
// myDoublyLinkedList.push('lalala');
// const myNode = myDoublyLinkedList.pop();
// console.log(myNode);
// console.log(myDoublyLinkedList);



//Checks for the push method

// const myDoublyLinkedList = new DoublyLinkedList();
// console.log(myDoublyLinkedList);

// myDoublyLinkedList.push('hahaa');
// console.log(myDoublyLinkedList);


// myDoublyLinkedList.push('lalal');
// console.log(myDoublyLinkedList);

// myDoublyLinkedList.push('zewzew');
// console.log(myDoublyLinkedList);

//Everything went ok with the push method.