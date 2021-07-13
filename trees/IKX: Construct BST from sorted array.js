

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

function build_balanced_bst(a) {
    return construct(a, 0, a.length-1);
}

function construct(nodes, startIndex, endIndex) {
    if(startIndex > endIndex) return null;
    
    let midIndex = Math.floor((startIndex + endIndex)/2);
    let root = new TreeNode(nodes[midIndex]);
    root.left_ptr = construct(nodes, startIndex, midIndex-1);
    root.right_ptr = construct(nodes, midIndex+1, endIndex);
    
    return root;
}

