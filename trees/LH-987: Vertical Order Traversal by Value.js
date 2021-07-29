/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * LOGIC:
 *  Left = ParentIndex - 1;
 *  Right = ParentIndex + 1;
 * BFS + Sort nodes by value for each level, before using index to add to final Result set
 */
let result, queue, minIndex;
var verticalTraversal = function(root) {
    result = [];
    queue = [];
    minIndex = 0;
    maxIndex = 0;
    if(!root) return result;
    queue.push([root, 0]);
    helper();
    return processOutput(result, minIndex, maxIndex);
};

// Pure BFS that stores (value, nodeIndex)
function helper() {
    while(queue.length) {
        let queueLength = queue.length;
        let level = [];
        for(let i=0; i<queueLength; i++) {
            let [node, index] = queue.shift();
            level.push([node.val, index]);
            
            if(node.left) {
                minIndex = Math.min(minIndex, index-1);
                queue.push([node.left, index-1]);
            }
            
            if(node.right) {
                maxIndex = Math.max(maxIndex, index+1);
                queue.push([node.right, index+1]);
            }
        }
        result.push(level);
    }
}

/**
 * 1. Sorts every level nodes by value to ensure nodes with lesser value appear earlier (especially when 2 nodes have same row / col)
 * 2. Abs(MinIndex) is used as offset to directly store values in final result 
 */
function processOutput(result, minIndex, maxIndex) {
    let finalResult = new Array(maxIndex-minIndex+1).fill([]);
    let offset = Math.abs(minIndex);
    result.forEach(levelNodes => {
        levelNodes
            .sort((a,b) => a[0]-b[0])
            .forEach(node => {
            let [element, index] = node;
            index = index + offset;
            finalResult[index] = [...finalResult[index], element];
        });
    });
    return finalResult;
}