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
 * @return {number}
 */
let queue, result, width;
var widthOfBinaryTree = function(root) {
    queue = [];
    width = 0;
    // Base Cases:
    if(!root) return width;
    if(!root.left && !root.right) return 1;
    
    // Check if the tree is a single branch (then ensure root is shifted down to ensure rootIndex values don't multiply to large numbers)
    root = preprocessTree(root);
    
    queue.push([root, 1]);
    helper();
    return width;
};

function preprocessTree(root) {
    while(root && root.right && !root.left) {
        root = root.right;
    }
    while(root && root.left && !root.right) {
        root = root.left;
    }
    return root;
}

/**
 * 1. Heap style Node numbering logic used to ensure 
 * correct width is assigned 
 * 2. At each level, the nodeIndex of first and last element is calculated
 */
function helper() {
    while(queue.length) {
        let queueLength = queue.length;
        let level = [];
        for(let i=0; i < queueLength; i++) {
            let [node, index] = queue.shift();
            if(node.left) {
                queue.push([node.left, index*2]);
            }

            if(node.right) {
                queue.push([node.right, index*2+1]);
            }
            level.push([node.val, index]);
        }
        let levelWidth = level[level.length-1][1]-level[0][1]+1;
        width = Math.max(width, levelWidth);
    }
}