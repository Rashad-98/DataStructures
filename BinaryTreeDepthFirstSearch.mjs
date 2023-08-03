import BinarySearchTree from "./BinarySearchTree.mjs"

const DFSearchPreOrder = (root) => {
    const visited = []

    const traverse = (node) => {
        if(!node) return
        visited.push(node.value)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)

    return visited
}

const DFSearchPostOrder = (root) => {
    const visited = []

    const traverse = (node) => {
        if(!node) return
        traverse(node.left)
        traverse(node.right)
        visited.push(node.value)
    }
    traverse(root)

    return visited
}

const DFSearchInOrder = (root) => {
    const visited = []

    const traverse = (node) => {
        if(!node) return
        traverse(node.left)
        visited.push(node.value)
        traverse(node.right)
    }
    traverse(root)

    return visited
}

const myTree = new BinarySearchTree()
myTree.insert(10)
myTree.insert(6)
myTree.insert(3)
myTree.insert(8)
myTree.insert(15)
myTree.insert(20)
// console.log(myTree)
const visited = DFSearchInOrder(myTree.root)
console.log(visited)