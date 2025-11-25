// Sliding Window Template in JavaScript

function slidingWindow(arr, windowSize) {
    const result = [];
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; // Add the next element to the window

        // Slide the window when we reach the desired window size
        if (windowEnd >= windowSize - 1) {
            result.push(windowSum); // Store the sum of the current window
            windowSum -= arr[windowStart]; // Remove the element going out of the window
            windowStart++; // Slide the window forward
        }
    }

    return result;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const windowSize = 3;
console.log(slidingWindow(arr, windowSize)); // Output: [6, 9, 12]