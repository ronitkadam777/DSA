
 /**
 * Solution 1: LOGIC (Top Down Construction)
 * Keep finding middle of linked list using slow / fast pointer, 
 * cut off connections before and after mid; Edge case: When mid is same as head handle seperately
 */

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

// Solution 2: 
// Alternate (where start / end are tracked and there is no need to break links)

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
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head === null) return null;
    let end = findLast(head);
    return helper(head, end);
};

function helper(start, end) {
    
    if(start === null || end === null) return null;
    if(start === end) return new TreeNode(start.val, null, null);
    
    let [endLeft, mid] = findMid(start, end);
    let root = new TreeNode(mid.val, null, null);
    root.left = helper(start, endLeft);
    root.right = helper(mid.next, end);
    return root;
}

function findMid(start, end) {
    let slow = start;
    let fast = start;
    let prev = null;
    while(fast.next && fast.next.next) {
        if(fast.next === end) break;
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
        if(fast === end) break;
    }
    return [prev, slow];
}

function findLast(start) {
    while(start.next && start.next.next) {
        start = start.next;
    }
    if(start.next) {
        start = start.next;
    } 
    return start;
}

// Solution 3: L-R Tree Construction

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
 * @param {ListNode} head
 * @return {TreeNode}
 */
let globalHead;
var sortedListToBST = function(head) {
    globalHead = head;
    let length = listLength(head);
    return helper(0, length-1);
};

function helper(startIndex, endIndex) {
    if(startIndex > endIndex) return null;
    if(startIndex === endIndex) {
        let node = new TreeNode(globalHead.val);
        globalHead = globalHead.next;
        return node;
    }
    
    let midIndex = Math.floor((endIndex + startIndex)/2);
    let root = new TreeNode(null, null, null);
    root.left = helper(startIndex, midIndex-1);
    root.val = globalHead.val;
    globalHead = globalHead.next;
    root.right = helper(midIndex+1, endIndex);    
    
    return root;
}

function listLength(head) {
    let length = 0;
    while(head) {
        head = head.next;
        length = length + 1;
    }
    return length;
}