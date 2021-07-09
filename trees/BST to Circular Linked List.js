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

let prev;
let sentinel;
let head;
function BTtoLL(root){
    sentinel = new TreeNode(null);
    prev = sentinel;
    if(root === null) return null;
    helper(root);
    
    head = sentinel.right_ptr;
    head.left_ptr = prev;
    prev.right_ptr = head;
    return head;
}

/**
 * 1. In-order traversal used to access all elements.
 * 2. Global Predecessor used to store previous node.
 * 3. Phase after left traversal and before right traversal used to connect predecessor to current node.
 * 3A. As connections are made leftward, and traversal is already completed, the future / rightside walk
 * doesn't get affected.
 */
function helper(root) {

    if(root.left_ptr) {
        helper(root.left_ptr);
    }
    
    prev.right_ptr = root;
    root.left_ptr = prev;
    prev = root;
    
    if(root.right_ptr) {
        helper(root.right_ptr);
    }
}

