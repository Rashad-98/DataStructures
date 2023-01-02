class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if(this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return value;
    }

    dequeue() {
        if(this.length === 0) return null;
        const node = this.first;
        if(this.length === 1) {
            this.first = null;
            this.last  = null;
        } else {
            this.first = node.next;
        }
        this.length--;
        return node.value;
    }
}


//tests

// const queue = new Queue();
// queue.enqueue('hahha');
// queue.enqueue('lalala');
// queue.enqueue('kakaka');
// queue.dequeue();
// console.log(queue);