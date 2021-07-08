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
let globalUnival;
function findSingleValueTrees(root){
    if(root === null) return 0;
    globalUnival = 0;
    helper(root);
    return globalUnival;
}

function helper(root) {
    // Leaf Nodes
    if((root.left_ptr === null) && (root.right_ptr === null)) {
        globalUnival = globalUnival + 1;
        return true;
    }
    let LU = true;
    let RU = true;
    let amIUnival = true;
    
    // LHS
    if(root.left_ptr !== null) {
       LU = helper(root.left_ptr);
       // Only if there exists a left child and it's value is not matching with the root, then flip to false;
       if(root.val !== root.left_ptr.val) {
           amIUnival = false;
       }
    }
    
    // RHS
    if(root.right_ptr !== null) {
       RU = helper(root.right_ptr);
       // Only if there exists a right child and it's value is not matching with the root, then flip to false;
       if(root.val !== root.right_ptr.val) {
           amIUnival = false;
       }
    }
    
    // Ensure local and global univals are factored in
    amIUnival = amIUnival && LU && RU;
    if(amIUnival) {
        globalUnival = globalUnival + 1;
    }
    return amIUnival;
}

