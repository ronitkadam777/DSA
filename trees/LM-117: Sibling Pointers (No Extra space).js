/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * Logic: 
 * The left -> right connection (next pointer) is populated by a parent for it's children.
 * If a parent has 2 children, 
 *      left child is directly connected to it's right
 *      right child's next is the parent's next valid node's child 
 *      (Valid node being a node that has atleast one child, else null)
 * 
 * If a parent only has 1 child,
 *      the child's next is the parent's next valid node's child 
 *      (Valid node being a node that has atleast one child, else null)
 * 
 * Because in the above logic, we may have to traverse parent's next pointers till we find a valid node, 
 * the next pointers on the right half of a tree needs to be constructed before hand.
 * Hence the traversal needs to first go to right before left. 
 */


var connect = function(root) {
    if(root === null) return null;
    helper(root);
    return root;
};

function helper(root) {
    /**
     * Base Conditions:
     * If node is null or leaf, return null
     */
    if(root === null) return;
    if(root.left === null && root.right === null) return null;
    
    /**
     * If Node has 2 children:
     * Connect left child's next to Right child
     * Connect right child's next is parent's next fertile node's child
     */
    if(root.left && root.right) {
        root.left.next = root.right;
        root.right.next = findPointerViaParent(root);
    }
    
    /**
     * If Node only has a single child:
     * Child's next is parent's next fertile node's child
     */
    // If Root has a Left Child only
    else if(root.left) {
        root.left.next = findPointerViaParent(root);
    }
    
    // If Root has a Right Child only
    else if(root.right) {
        root.right.next = findPointerViaParent(root);
    }
    
    // DFS Call (Root -> Right -> Left)
    if(root.right) {
        helper(root.right);
    }
    
    if(root.left) {
        helper(root.left);
    }
}

/**
 * Generates the next pointer for a node: 
 * 1. If parent's next is null, return null 
 * 2. Keep traversing parent's next until you find a node that has a child
 * (Root -> Right -> Left) Traversal ensures the next pointers for a parent are constructed.
 */
function findPointerViaParent(root) {
    if(root.next === null) return null;
    root = root.next;
    while(root) {
        if(root.left) return root.left;
        if(root.right) return root.right;
        root = root.next;        
    }
    return null;
}

