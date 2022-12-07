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
        return this;
    }

    pop() {
        if(this.length === null) {
            return undefined;
        }
        const node = this.tail;
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

    shift() {
        if(this.length === null) return undefined;
        const node = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = null;
            return node;
        }
        this.head = node.next;
        this.head.previous = null;
        this.length--;
        node.next = null;
        return node;
    }

    unshift(value) {
        const node = new Node(value);
        if(this.length === null) {
            this.head = node;
            this.tail = node;
            this.length = 1;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
            this.length++;
        }
        return this;
    }

    get(index) {
        if((index < 0) || (index >= this.length)) return null;
        if(index <= this.length/2) {
            let count = 0;
            let node = this.head;
            while(count != index) {
                node = node.next;
                count++;
            }
            return node;
        } else {
            let count = this.length - 1;
            let node = this.tail;
            while(count != index) {
                node = node.previous;
                count--;
            }
            return node;
        }
    }
}


// Checks for the get method

// const myDoublyLinkedList = new DoublyLinkedList();
// myDoublyLinkedList.push('hehaahahaha');
// myDoublyLinkedList.push('zazazazazazaz');
// myDoublyLinkedList.push('lololololl');
// myDoublyLinkedList.push('asasasasasaasasaas');
// myDoublyLinkedList.push('vavavavavvavaavva');
// const myNode = myDoublyLinkedList.get(4);
// console.log(myNode);
// console.log(myDoublyLinkedList);


// Checks for the unshift method

// const myDoublyLinkedList = new DoublyLinkedList();
// const list1 = myDoublyLinkedList.unshift('zew');
// console.log(list1);
// const list2 = myDoublyLinkedList.unshift('hahaa');
// console.log(list2);


//Checks for the shift method

// const myDoublyLinkedList = new DoublyLinkedList();
// myDoublyLinkedList.push('hahaa');
// myDoublyLinkedList.push('lala');
// myDoublyLinkedList.push(3);
// const myNode = myDoublyLinkedList.shift();
// console.log(myNode);
// console.log(myDoublyLinkedList);


// Checks for the pop method

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