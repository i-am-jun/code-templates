// Binary tree BFS traversal template
let fun = root => {
    let queue = [root];
    let ans = 0;

    while (queue.length){
        let currentLength = queue.length;
       //do some logic at current level
       let nextQueue = [];
       for(let i = 0; i < currentLength; i++){
            let node = queue[i];
            //do some logic with node
            if(node.left){
                nextQueue.push(node.left);
            }
            if(node.right){
                nextQueue.push(node.right);
            }
       }
         queue = nextQueue;
    }
    return ans;
}

// Example usage:
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Creating a sample binary tree:
//       1
//      / \
//     2   3
//    / \
//   4   5

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(fun(root)); // Output will depend on the logic applied inside the loop