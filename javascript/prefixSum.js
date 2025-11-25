//prefix sum array
let fun = arr => {
    let prefixSum = new Array(arr.length).fill(0);
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    return prefixSum;
}   