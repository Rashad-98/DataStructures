class Node {
    constructor (value, pointer) {
        this.value = value;
        this.next = pointer;
    }
}

export default class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    push (node) {
        const n = JSON.parse(JSON.stringify(node));
        if (this.head === null) {
            console.log('hi')
            this.head = new Node(n.value, null);
        }else {
            let traverser = this.head;
            while (traverser.next !== null) {
                traverser = traverser.next;
            }
            traverser.next = new Node(n.value, null);
            this.tail = traverser.next;
        }
        return this;
    }

    reverse () {
        let reversedList = new SinglyLinkedList();
        const inAndOut = (pointer) => {
            if (pointer.next === null) {
                reversedList.head = new Node(JSON.parse(JSON.stringify(pointer.value)), null);
                return;
            }
            let current = JSON.parse(JSON.stringify(pointer));
            let next = pointer.next;
            inAndOut(next);
            reversedList.push(current);
            if (current === JSON.parse(JSON.stringify(this.head))) {
                reversedList.tail = current;
            }
            return;
        }
        inAndOut(this.head);
        this.head = reversedList.head;
        this.tail = reversedList.tail;
        return this;
    }
}

let list = new SinglyLinkedList();
list.head = new Node(7, null);
list.head.next = new Node(44, null);
list.head.next.next = new Node(74, null);
list.head.next.next.next = new Node(99, null);
list.tail = list.head.next.next.next;
// console.log(list);
list.reverse();
console.log(list);
// console.log(list.tail.next);

// list.head.next.next = list.head;
// list.head = null;
// console.log(list);

// list.push({value: 777, next: null});
// console.log(list);

// lost = new SinglyLinkedList();
// lost.head = new Node(999, null);
// lost.push({value:6, next: null})
// console.log(lost);
