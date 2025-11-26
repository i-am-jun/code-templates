// Binary Search Duplicate Elements Left Insertion Point Template in JavaScript

let fun = (arr, target) => {
    let left = 0;
    let right = arr.lenght -1;
    while ( left <= right ) { 
    let mid = Math.floor(( left + right ) / 2);
    
    if ( arr[mid] < target ) {
            left = mid +1;
        }
        else {
            right = mid -1;
        }
    }
    return left; // left is the left insertion point for target
}

// Example usage:
const sortedArray = [1, 2, 2, 2, 3, 4, 5];
const targetValue = 2;
console.log(fun(sortedArray, targetValue)); // Output: 1 (left insertion point for targetValue)

const missingValue = 0;
console.log(fun(sortedArray, missingValue)); // Output: 0 (insertion point for missingValue)

const anotherMissingValue = 6;
console.log(fun(sortedArray, anotherMissingValue)); // Output: 7 (insertion point for anotherMissingValue)  
