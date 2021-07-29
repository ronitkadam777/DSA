/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 /**
 * LOGIC (Top Down Construction)
 * Keep finding middle of linked list using slow / fast pointer, 
 * cut off connections before and after mid; Edge case: When mid is same as head handle seperately
 */
var sortedListToBST = function(head) {
    return helper(head);
};

function helper(head) {
    if(!head) return null;
    if(!head.next) {
        return new TreeNode(head.val, null, null);
    }
    
    let mid = findMid(head);
    let midNext = mid.next;
    mid.next = null;
    let root = new TreeNode(mid.val, null, null);
    if(mid !== head) {
        root.left = helper(head);
    } else {
        root.left = null;
    }
    
    root.right = helper(midNext);
    
    return root;
}

function findMid(head) {
    let prev = null;
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next) {
        prev = slow;
        slow = slow.next; 
        fast = fast.next.next;
    }
    if(prev) prev.next = null;
    return slow;
}

function printList(head) {
    while(head) {
        head = head.next;
    }
}