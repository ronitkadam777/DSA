/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return helper(inorder, 0, inorder.length-1, postorder, 0, postorder.length-1);
};

function helper(inorder, startI, endI, postorder, startP, endP) {
    if(startI > endI) return null;
    if(startI === endI) {
        return new TreeNode(inorder[startI], null, null);
    }
    
    let root = new TreeNode(postorder[endP], null, null);
    let rootIndex = inorder.findIndex(el => el === postorder[endP]);
    let leftOffset = rootIndex - startI;
    let rightOffset = endI - rootIndex;
    let left = helper(inorder, startI, rootIndex-1, postorder, startP, startP+leftOffset-1);
    root.left = left;
    root.right = helper(inorder, rootIndex+1, endI, postorder, startP+leftOffset, endP-1);
    return root;
}