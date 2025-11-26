// Iterative approach to Depth-First Search (DFS) in a graph

let fn = graph => {
    let stack = [START_NODE];
    let seen = new Set([START_NODE]);
    let ans = 0;

    while (stack.length) {
        let node = stack.pop();
        // do some logic with node
        ans += 1; // Example logic: counting nodes
        for (const neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                stack.push(neighbor);
            }
        }
    }
    return ans;
}
// Example usage:
// Graph represented as an adjacency list
// Example graph:
// 0 -- 1
// |    |
// 2 -- 3

let graph = [
    [1, 2],    // Neighbors of node 0
    [0, 3],    // Neighbors of node 1
    [0, 3],    // Neighbors of node 2
    [1, 2]     // Neighbors of node 3
];

const START_NODE = 0; // Define the starting node for DFS

console.log(fn(graph)); // Output will depend on the logic applied inside the loop  
// In this example, the output will be 4, as there are 4 nodes in the connected component starting from node 0.
