// Binary Search Template in JavaScript

let fun = (arr, target) => {
let left = 0;
let right = arr.length -1;
while(left <= right){
    let mid = Math.floor((left + right) /2);
    if(arr[mid] === target){
        return mid; // Target found at index mid
    }
    else if(arr[mid] < target){
        left = mid + 1; // Search in the right half
    }else{
        right = mid -1; // Search in the left half
    }
    
}
// left is the insertion point
return left;
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11];
const targetValue = 7;
console.log(fun(sortedArray, targetValue)); // Output: 3 (index of targetValue)

const missingValue = 6;
console.log(fun(sortedArray, missingValue)); // Output: 3 (insertion point for missingValue)    
