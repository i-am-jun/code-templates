//prefix sum array
let fun = arr => {
    let prefixSum = new Array(arr.length).fill(0);
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    return prefixSum;
}   


// Example usage:const arr = [1, 2, 3, 4, 5];
console.log(fun(arr)); // Output: [1, 3, 6, 10, 15]

// To get sum of elements from index i to j (inclusive)
let rangeSum = (prefixSum, i, j) => {
    if (i === 0) {
        return prefixSum[j];
    } else {
        return prefixSum[j] - prefixSum[i - 1];
    }
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const prefixSumArr = fun(arr);
console.log(rangeSum(prefixSumArr, 1, 3)); // Output: 9 (2 + 3 + 4)

