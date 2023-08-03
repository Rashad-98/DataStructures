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

    // helper function to traverse the tree from 
    // any given node @root until it finds the right place to put @newNode
    // and returns it or return undefined if it was alreadey there.
    #recursiveTraverser (root, newNode) {

        const traverserRoot = root;

        return (function traverser(traverserRoot, newNode) {
            if((newNode.value > traverserRoot.value) && (traverserRoot.right === null)){
                return traverserRoot.right = newNode;
            } else if((newNode.value > traverserRoot.value)) {
                traverserRoot = traverserRoot.right; 
                return traverser(traverserRoot, newNode);
            }
            if((newNode.value < traverserRoot.value) && (traverserRoot.left === null)) {
                return traverserRoot.left = newNode;
            } else if((newNode.value < traverserRoot.value)) {
                traverserRoot = traverserRoot.left;
                return traverser(traverserRoot, newNode);
            }
            if(newNode.value === traverserRoot.value) {
                return undefined;
            }
        })(traverserRoot, newNode)
    }

    // helper function that takes a any node @root and traverses the
    // tree to search for a given node @node and returns true or false
    // if it finds it or not.
    #findMe(root, value) {
        if (root.value === value) return true;
        if (root.value < value && root.right !== null) return this.#findMe(root.right, value);
        if (root.value < value) return false;
        if (root.value > value && root.left !== null) return this.#findMe(root.left, value);
        if (root.value > value) return false;
    }

    insert(value) {
        // This method returns undefined when there are duplicate nodes.
        const node = new Node(value);
        if(this.root === null) return this.root = node;
        return this.#recursiveTraverser(this.root, node);
    }
    
    find(value) {
        if(this.root === null) return false;
        return this.#findMe(this.root, value);
    }
}

export default BinarySearchTree


// tests
// const tree = new BinarySearchTree();
// tree.insert(5);
// console.log(tree.insert(5));
// console.log(tree.insert(7));
// console.log(tree.insert(8));
// tree.insert(3);
// tree.insert(4);
// console.log(tree.find(10));
// // console.log(tree.root);