/*
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left_ptr = null;
            this.right_ptr = null;
        }
    }
*/

/**
 * Logic: 
 * 1. Bottom Up (isBST / min / max ranges)
 * 2. Bottom Up (nodesFound)
 * 3. At current node check
 *  3A: BST is maintained and updated bottom up ranges
 *  3B: Add left + right nodes + 1 and update globalMax
 * 
 *  Passing 21/22 cases :(
 */
let globalMax;
function findLargestBST(root) {
    globalMax = 1;
    if(root === null) return 0;
    helper(root);
    return globalMax;
}

function helper(root) {
    // Leaf Node
    if(root.left_ptr === null && root.right_ptr === null) {
        return [root.val, root.val, true, 1];
    }
    
    let isBST = false;
    let leftBST = true;
    let rightBST = true;
    let leftCount = 0;
    let rightCount = 0;
    let localCount = 0;
    let leftMin = root.val; 
    let leftMax = root.val; 
    let rightMin = root.val; 
    let rightMax = root.val;

    
    if(root.left_ptr) {
        [leftMin, leftMax, leftBST, leftCount] = helper(root.left_ptr);
    }
    
    
    if(root.right_ptr) {
        [rightMin, rightMax, rightBST, rightCount] = helper(root.right_ptr);
    }
    
    if(leftBST && rightBST) {
        if(leftMax <= root.val && root.val <= rightMin) {
            isBST = true;
            localCount = rightCount + leftCount + 1;
            globalMax = Math.max(globalMax, localCount);
        }
    }
    
    return [leftMax, rightMin, isBST, localCount]
}

