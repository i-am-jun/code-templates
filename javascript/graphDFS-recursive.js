//For the graph templates, assume the nodes are numbered from 0 to n - 1 and the graph is given as an adjacency list. 
// Depending on the problem, you may need to convert the input into an equivalent adjacency list before applying the templates.
let fn = graph => {
    let dfs = node => {
        let ans = 0;
        // do some logic
        for (const neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                ans += dfs(neighbor);
            }
        }

        return ans;
    }

    let seen = new Set([START_NODE]);
    return dfs(START_NODE);
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

console.log(fn(graph)); // Output will depend on the logic applied inside dfs