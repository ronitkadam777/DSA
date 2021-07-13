
/*
 * Complete the function below.
 */

/*
    For your reference:
    
    function TreeNode(node_value) 
    {
        this.val = node_value;
        this.left_ptr = null;
        this.right_ptr = null;
    }
*/
let result;
let counter;
function kth_smallest_element(root, k) {
    result = null;
    counter = 1;
    traversal(root, k);
    return result;
}

function traversal(root, k) {
    if(root.left_ptr) {
        traversal(root.left_ptr, k);
    }
    if(counter === k) {
        result = root.val;
    }
    counter = counter + 1;
    
    if(root.right_ptr) {
        traversal(root.right_ptr, k);
    }
}

