// DFS in the iterative way using stack
let dfs = root => {
    let stack = [root];
    let ans = 0;

    while (stack.length){
        let node = stack.pop();
        //do some logic with node
        if(node.left){
            stack.push(node.left);
        }
        if(node.right){
            stack.push(node.right);
        }
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

console.log(dfs(root)); // Output will depend on the logic applied inside the loop  
