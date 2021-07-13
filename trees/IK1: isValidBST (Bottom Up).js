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
let validBST;
function isBST(root) {
    validBST = true;
    if(root === null) {
        return true;
    }
    helper(root);
    return validBST;
}

function helper(root) {
    if(root.left_ptr === null && root.right_ptr === null) {
        return {
            min: root.val,
            max: root.val
        }
    }
    let leftMax = root.val;
    let rightMin = root.val;
    if(root.left_ptr) {
        let leftSubtree = helper(root.left_ptr);
        leftMax = leftSubtree.max;
        if(root.val < leftSubtree.max) {
            validBST = false;
        }
    }
    if(root.right_ptr) {
        let rightSubtree = helper(root.right_ptr);
        rightMin = rightSubtree.min;
        if(root.val > rightSubtree.min) {
            validBST = false;
        }
    }
    return {
        min: leftMax,
        max: rightMin
    }
}


