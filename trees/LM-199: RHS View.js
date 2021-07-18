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
 * @return {number[]}
 */
let result;
let queue;
var rightSideView = function(root) {
    result = [];
    queue = [];
    if(root === null) return result;
    queue.push(root);
    helper();
    return result;
};

function helper() {
    while(queue.length) {
        let queueLength = queue.length;
        let rightMostElement = null;
        for(let i=0; i < queueLength; i++) {
            let treeNode = queue.shift();
            rightMostElement = treeNode.val;
            
            if(treeNode.left) {
                queue.push(treeNode.left);
            }

            if(treeNode.right) {
                queue.push(treeNode.right);
            }            
        }
        result.push(rightMostElement);
    }
}

