/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lca;
var lowestCommonAncestor = function(root, p, q) {
    lca = null;
    helper(root, p.val, q.val);
    return lca;
};

function helper(root, p, q) {
    // Leaf Nodes
    if(!root.left && !root.right) {
        return [root.val === p, root.val === q]; 
    }
    
    let found_p = false;
    let found_q = false;
    let found_lp = false;
    let found_lq = false;
    let found_rp = false;
    let found_rq = false;
    
    if(root.left) {
        [found_lp, found_lq] = helper(root.left, p, q);
    }
    
    if(root.right) {
        [found_rp, found_rq] = helper(root.right, p, q);
    }

    found_p = found_lp || found_rp;
    found_q = found_lq || found_rq;
    if(root.val === p) found_p = true;
    if(root.val === q) found_q = true;
    
    if(found_p && found_q && !lca) {
        lca = root;
    }
    return [found_p, found_q];
}