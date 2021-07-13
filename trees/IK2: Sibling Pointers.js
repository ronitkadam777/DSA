/*
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left_ptr = null;
            this.right_ptr = null;
            this.next_right = null;
        }
    }
*/

/**
 * Logic: 
 * 
 * Using a standard BFS Template, as nodes that are next to each other need to be connected.
 * While adding the node, 
 *  1. We check if any previous node exists at that level
 *  2. If yes, connect prev.right_pointer to node  
 *  3. Update prev to node.
 */
let queue;
function populateSiblingPointers(root) {
    if(root === null) return null;
    queue = [];
    queue.push(root);
    bfs(root);
    return root;
}

function bfs(root) {
    //let finalResult = [];
    while(queue.length) {
        let result = [];
        let prev = null;
        let queueLength = queue.length;
        for(let i=0; i < queueLength; i++) {
            
            let node = queue.shift();
            if(prev) {
                prev.next_right = node;
            }
            prev = node;
            result.push(node.val);
            if(node.left_ptr) {
                queue.push(node.left_ptr);
            }
            
            if(node.right_ptr) {
                queue.push(node.right_ptr);
            }            
        }
        //finalResult.push(result);
    }
}

