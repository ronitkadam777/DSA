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
 *  Complete the function below.
    Input: root of the input tree
    Output: root of the cloned tree
 */
// Keep creating the tree while traversing the original tree.
    function cloneTree(root) {
        if(root === null) return null;
        return helper(root);
    }
    
    function helper(root) {
        if(root === null) return;
        let cloneRoot = new TreeNode(root.val);
        
        if(root.left_ptr) {
            cloneRoot.left_ptr = helper(root.left_ptr);    
        }
        
        if(root.right_ptr) {
            cloneRoot.right_ptr = helper(root.right_ptr);    
        }
        
        return cloneRoot;
    }
    
    