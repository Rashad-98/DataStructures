import BinarySearchTree from "./BinarySearchTree.mjs"

const BFSearch = (root) => {
    let node = null
    const queue = []
    const visited = []

    queue.push(root)
    while(queue.length) {
        node = queue.shift()
        visited.push(node.value)
        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }

    return visited
}

const myTree = new BinarySearchTree()
myTree.insert(6)
myTree.insert(52)
myTree.insert(2)
myTree.insert(43)
myTree.insert(3)
// console.log(myTree.root)
const visited = BFSearch(myTree.root)
console.log(visited)