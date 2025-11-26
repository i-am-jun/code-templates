// arr is a list of characters
let fn = arr => {
    let ans = [];
    for (const c of arr) {
        ans.push(c);
    }

    return ans.join("")
}
// Alternative approach using string concatenation
 fn = arr => {
    let ans = "";
    for (const c of arr) {
        ans += c;
    }

    return ans;
}

// In JavaScript, benchmarking shows that concatenation with += is faster than using .join().

// Example usage:
const charArray = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!'];
console.log(fn(charArray)); // Output: "Hello World!"   