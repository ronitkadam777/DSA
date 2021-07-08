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
 * Complete the function below.

**** LOGIC ****
1. We would use an explicit stack to ape the recursive flow (implict stack)
2. However, the recursive flow passes through a node multiple times
3. Based on the visit count, a specific action needs to be performed.
    i. Eg. While visiting the first time, recursive flow searches for the left node
    ii. Eg. While visiting the second time, recursive flow searches for the right node
    iii. Eg. While visiting the third time, recursive flow is done with the node
4. We use the stack and store the node along with this explicit state 
 */
let traversal;
let stack;
function postorderTraversal(root) {
    traversal = [];
    stack = [];
    if(root === null) return traversal;
    stack.push([root, 'landing']);
    helper();
    return traversal;
}

function helper() {
    while(stack.length) {
        let [root, state] = stack[stack.length-1];
        if(state === 'landing') {
            stack[stack.length-1] = [root, 'arrival'];
            if(root.left_ptr) {
                stack.push([root.left_ptr, 'landing']);
            }
        }
        if(state === 'arrival') {
            stack[stack.length-1] = [root, 'interim'];
            if(root.right_ptr) {
                stack.push([root.right_ptr, 'landing']);
            }
        }
        if(state === 'interim') {
            let element = stack.pop();
            traversal.push(element[0].val);
        }
    }
}

