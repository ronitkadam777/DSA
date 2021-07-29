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
 * Local Problem: Find the local maxPath, Math.max(LH+Root, RH+root, root); return to parent
 * Global Problem: Find the global maxPath, Math.max(globalMax, LH+Root, RH+root, LH+RH+root, root) update globally
 * 
 * Coded with the assumption: Path at any node include all the way until leafs 
 */
let maxGlobalPath;
var maxPathSum = function(root) {
    maxGlobalPath = Number.MIN_SAFE_INTEGER;
    if(!root) return maxGlobalPath;
    helper(root);
    return maxGlobalPath;
};

function helper(root) {
    
    if(!root.left && !root.right) {
        maxGlobalPath = Math.max(maxGlobalPath, root.val);
        return root.val;
    }
    
    let LH = 0;
    let RH = 0;
    let maxLocalPath = 0;
    if(root.left) {
        LH = helper(root.left);
    }
    
    if(root.right) {
        RH = helper(root.right);
    }
    
    maxLocalPath = Math.max(root.val, LH + root.val, RH + root.val);
    maxGlobalPath = Math.max(maxGlobalPath, root.val, LH + root.val, RH + root.val, LH + RH + root.val);
    
    return maxLocalPath;
}