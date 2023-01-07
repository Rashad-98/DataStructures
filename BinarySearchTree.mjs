class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    #recursiveTraverser (root, newNode) {

        const traverserRoot = root;

        (function traverser(traverserRoot, newNode) {
            if((newNode.value > traverserRoot.value) && (traverserRoot.right === null)){
                return traverserRoot.right = newNode;
            } else if((newNode.value > traverserRoot.value)) {
                traverserRoot = traverserRoot.right; 
                traverser(traverserRoot, newNode);
            }
            if((newNode.value < traverserRoot.value) && (traverserRoot.left === null)) {
                return traverserRoot.left = newNode;
            } else if((newNode.value < traverserRoot.value)) {
                traverserRoot = traverserRoot.left;
                traverser(traverserRoot, newNode);
            }
        })(traverserRoot, newNode)
    }

    insert (value) {
        const node = new Node(value);
        if(this.root === null) return this.root = node;
        this.#recursiveTraverser(this.root, node);
    }
}


// tests
// const tree = new BinarySearchTree();
// tree.insert(5);
// tree.insert(7);
// tree.insert(3);
// tree.insert(4);
// console.log(tree);