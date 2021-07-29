/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * LOGIC: 
 * 1. Do pre-order traversal and remember the Prev node.
 * 2. Prev.left -> node (Can't do Prev.right -> node as it would break the DFS walk)
 * 3. Post processing to rebuild Left branching tree into Right branching tree
 */
let prev;
var flatten = function(root) {
    if(!root) return null;
    prev = null;
    helper(root);
    printLeft(root);
    connectRight(root);
};

function helper(root) {
    if(prev) {
        prev.left = root;
    }
    prev = root;
    
    if(root.left) {
        helper(root.left);
    }
    
    if(root.right) {
        helper(root.right);
    }
}

function printLeft(root) {
    while(root.left) {
        root.right = null;
        root = root.left;
    }
}

function connectRight(root) {
    while(root.left) {
        root.right = root.left;
        root.left = null;
        root = root.right;
    }
}