//Find number of sub-arrays that fit in exact criteria.
let fun = (arr, k) => {
let counts = new Map(); // Map to store frequency of prefix sums
counts.set(0, 1); // Initialize with sum 0 occurring once
let ans = 0, curr = 0; // curr is the current prefix sum

for (const num of arr) {
    // do logic to change the curr value
    ans += counts.get(curr - k) || 0; // Check if there is a prefix sum that fits the criteria
    counts.set(curr, (counts.get(curr) || 0) + 1); // Update the frequency of the current prefix sum
    }
    return ans;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const k = 5;
console.log(fun(arr, k)); // Output will depend on the logic applied to 'curr'  
// For the above example, if we consider curr as the sum of elements, the output will be 2
// (sub-arrays [2,3] and [5] sum to 5)
// Note: Adjust the logic inside the loop to fit the exact criteria for 'curr' as needed.
// Note: This template assumes that 'curr' is being updated in a way that reflects the sum of elements.