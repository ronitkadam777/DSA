/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * LOGIC USED:
 * Assumes trees are similar, unless proved otherwise.
 * Conditions while doing DFS whether trees will not be similar:
 * 1F. Node values are different 
 * 2F. Left Child exists but right doesn't 
 * 3F. Right Child exists but left doesn't 
 * 4F. If both are leaves and values are different 
 * 5T. If both nodes are null, then it's still valid, hence skip (to preserve truthy)
 */
let sameTree;
var isSameTree = function(p, q) {
    sameTree = true;
    if(p === null && q === null) return true;
    if(p === null & q !== null) return false;
    if(p !== null & q === null) return false;
    helper(p, q);
    return sameTree;
};

function helper(leftTree, rightTree) {
    
    if(isLeaf(leftTree) && isLeaf(rightTree)) {
        if(leftTree.val !== rightTree.val) {
            sameTree = false;
        }
        return;
    }

    if(leftTree.val !== rightTree.val) {
        sameTree = false;
        return;
    }
    
    if(leftTree.left === null && rightTree.left === null) {
        // skip
    } else if(leftTree.left && rightTree.left) {
        helper(leftTree.left, rightTree.left);
    } else {
        sameTree = false;
        return;
    }


    if(leftTree.right === null && rightTree.right === null) {
        // skip
    } else if(leftTree.right && rightTree.right) {
        helper(leftTree.right, rightTree.right);
    } else {
        sameTree = false;
        return;
    }
}

function isLeaf(root) {
    return ((root.left === null) && (root.right === null));
}