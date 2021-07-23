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
 * DFS is used.
 * Assuming tree is symmetric unless proved otherwise, when:
 * 1. Root's Left child value !== Right child value
 * 2. R1's Left child exist but R2's Right doesn't
 * 3. R1's Right child exist but R2's Left doesn't
 */
let symmetric;
var isSymmetric = function(root) {
    symmetric = true;
    helper(root, root);
    return symmetric;
};

function helper(root1, root2) {
    
    if(root1.val !== root2.val) {
        symmetric = false;
        return;
    }
    
    if(root1.left && !root2.right) {
        symmetric = false;
        return;
    }
    
    if(root1.right && !root2.left) {
        symmetric = false;
        return;
    }
    
    if(root1.left && root2.right) {
        helper(root1.left, root2.right);
    }
    
    if(root1.right && root2.left) {
        helper(root1.right, root2.left);
    }
}