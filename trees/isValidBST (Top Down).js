/*
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left_ptr = null;
            this.right_ptr = null;
        }
    }
*/
/*
 * Complete the function below.
 */
let isValidBST;
function isBST(root) {
  isValidBST = true;
  if(root === null) return isValidBST;
  helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  return isValidBST;
}

function helper(root, lowerBound, upperBound) {
    
    if(lowerBound > root.val || root.val > upperBound) {
        isValidBST = false;
        return;
    }
    
    // Leaf Node
    if(root.left_ptr === null && root.right_ptr === null) {
        if(lowerBound > root.val || root.val > upperBound) {
            isValidBST = false;
        }
        return;
    }
    
    if(root.left_ptr) {
        helper(root.left_ptr, lowerBound, root.val);
    }
    
    if(root.right_ptr) {
        helper(root.right_ptr, root.val, upperBound);
    }
}

