// binary tree DFS recursive traversal template
let dfs = root => {
    if(!root){
        return;
    }
    let ans = 0;
    // pre-order logic here (process node before children)
    dfs(root.left);
    // in-order logic here (process node between children)
    dfs(root.right);
    // post-order logic here (process node after children)
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

console.log(dfs(root)); // Output will depend on the logic applied in pre-order, in-order, and post-order sections  