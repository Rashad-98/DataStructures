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

    #recursiveTraverser (rootNode, newNode) {
        if(newNode.value > rootNode.value){
           if(rootNode.right === null) {
                return rootNode.right = newNode;
           }
           rootNode = rootNode.right; 
           this.#recursiveTraverser(rootNode, newNode);
        }
        if(newNode.value < rootNode.value) {
            if(rootNode.left === null) {
                return rootNode.left = newNode;
            }
            rootNode = rootNode.left;
            this.#recursiveTraverser(rootNode, newNode);
        }
    }

    insert (value) {
        const node = new Node(value);
        if(this.root === null) return this.root = node;
        let ourRoot = this.root;
        this.#recursiveTraverser(ourRoot, node);
    }
}


// tests
const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);
console.log(tree);

// const newThing = new BinarySearchTree();
// newThing.hello();




//insert
// take the value and make a node with it
// if the tree is empty, set the root to the newly created node
// make a new variable called ourRoot and make it point to this.root
// make a recursive function that checks if ourRoot has a value greater or smaller that the new value, if greater (add the samller part),
// check ourRoot's right, if it is null set it to the new value and retur, and if it is not null call that recursive function again.