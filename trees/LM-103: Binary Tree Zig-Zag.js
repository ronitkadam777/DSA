/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let queue;
let result;
var zigzagLevelOrder = function(root) {
    queue = [];
    result = [];
    if(root === null) return result;
    queue.push(root);
    helper();
    return result;
};

function helper() {
    let flag = false;
    while(queue.length) {
        let queueLength = queue.length;
        let level = [];
        for(let i=0; i < queueLength; i++) {
            let treeNode = queue.shift();
            level.push(treeNode.val);
            
            if(treeNode.left) {
                queue.push(treeNode.left);
            }
            
            if(treeNode.right) {
                queue.push(treeNode.right);
            }
        }
        if(flag) level.reverse();
        flag = !flag;
        result.push(level);
    }
}