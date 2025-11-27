// Binary search template for greedy problems in JavaScript

//for finding minimum feasible value

let fun = arr=> {

let check = x => {
    //define feasibility check according to problem
    return true;
}

let left = MININUM_POSSIBLE_VALUE; // define according to problem
let right = MAXIMUM_POSSIBLE_VALUE; // define according to problem

while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (check(mid)) { // define check function according to problem
        right = mid -1; // try for a smaller feasible value
    } else {
        left = mid + 1; // increase the value
    }
}

// left is the minimum feasible value
return left;
}


