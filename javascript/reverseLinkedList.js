//Reverse a linked list in JavaScript
let fun = head => {
    let curr = head;
    let prev = null;
    while(curr != null){
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev; // New head of the reversed linked list
}

// Example usage:
// Assuming a linked list node structure
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let reversedHead = fun(head);

// Print reversed linked list
let curr = reversedHead;
while (curr !== null) {
    console.log(curr.value); // Output: 5 4 3 2 1
    curr = curr.next;
}