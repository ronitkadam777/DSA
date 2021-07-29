/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
let counter, kSmallest;
var kthSmallest = function(root, k) {
    counter = 0;
    kSmallest = null;
    helper(root, k);
    return kSmallest;
};

function helper(root, k) {
    
    if(root.left) {
        helper(root.left, k);
    }
    
    counter = counter + 1;
    if(counter === k) {
        kSmallest = root.val;
    }
    
    if(root.right) {
        helper(root.right, k);
    }
}