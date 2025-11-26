/*
JavaScript does not have any built-in support - it is recommended
that you have another language ready in case you need to use a heap
*/
// Top K Elements with a Min-Heap in JavaScript

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[index] < this.heap[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (this.getLeftChildIndex(index) < length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
                smallerChildIndex = rightChildIndex;
            }

            if (this.heap[index] > this.heap[smallerChildIndex]) {
                this.swap(index, smallerChildIndex);
                index = smallerChildIndex;
            } else {
                break;
            }
        }
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

let topKElements = (arr, k) => {
    const minHeap = new MinHeap();

    for (const num of arr) {
        minHeap.insert(num);
        if (minHeap.size() > k) {
            minHeap.remove();
        }
    }

    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.remove());
    }

    return result;
}

// Example usage:
const arr = [3, 1, 5, 12, 2, 11, 15];
const k = 3;
console.log(topKElements(arr, k)); // Output: [11, 12, 15]
// Note: The output array may not be sorted. If a sorted output is required, sort the result array before returning.
