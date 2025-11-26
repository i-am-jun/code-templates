// Linked list : fast and slow pointers
let fun = head => {
    let slow = head;
    let fast = head;
    let ans = 0 

    while (fast !== null && fast.next !== null) {
        // do some logic with slow and fast pointers
        slow = slow.next;
        fast = fast.next.next;
    }
    //return ans;
    return slow; // slow is at the middle node
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

console.log(fun(head).value); // Output: 3 (the middle node)