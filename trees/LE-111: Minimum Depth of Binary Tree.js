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
 * Do normal DFS and at leaf calculate the height, if less than global height, update globalHeight
 * Backtracking Case: if running height is already exceeded, skip remaining execution branch. 
 */
let globalHeight;
var minDepth = function(root) {
    if(root === null) return 0;
    globalHeight = Number.MAX_SAFE_INTEGER;
    dfs(root, 1);
    return globalHeight;
};

function dfs(root, height) {
    // Backtracking Case:
    if(height >= globalHeight) return;
    
    // Leaf Node:
    if(root.left === null && root.right === null) {
        globalHeight = Math.min(height, globalHeight);
        return;
    }
    
    if(root.left) {
        dfs(root.left, height+1);    
    }
    
    if(root.right) {
        dfs(root.right, height+1);
    }
    
}