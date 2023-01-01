class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if(this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            const temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        this.length++;
        return value;
    }

    pop() {
        if(this.length === 0) return null;
        const temp = this.first;
        if(this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
        }
        this.length--;
        return temp.value;
    }
}

// tests

// const stack = new Stack();
// stack.push('hahah');
// stack.push('kakak');
// stack.push('lalala');
// console.log(stack);
// console.log(stack.pop());
// // console.log(stack);