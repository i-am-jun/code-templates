// Monotonic Increasing Stack Template in JavaScript
// Same logic can be applied for Monotonic Queue by changing the stack operations accordingly.

let fun = arr => {
    let stack = []; // Monotonic increasing stack
    let ans = 0;
    
    for(const num of arr){
        // for monotonic decreasing stack, change '>' to '<'
        while(stack.length && stack[stack.length -1] > num){
            // do some logic with stack top and current num
            stack.pop()
        }
        stack.push(num)
    }
    return ans;
    
}

// Example usage:
const arr = [2, 1, 5, 6, 2, 3];
console.log(fun(arr)); // Output will depend on the logic applied inside the loop
// Note: Adjust the logic inside the while loop to fit the exact criteria needed for your problem.  
