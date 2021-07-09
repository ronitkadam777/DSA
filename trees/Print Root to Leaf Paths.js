/*
 * Complete the function below.
 */
let result;
function printAllPaths(root){
    result = [];
    if(root === null) return [];
    helper(root, [root.val]);
    result.forEach(el => {
            console.log(el);
    });
    return result;
}

function helper(root, pathSoFar) {

    
    // Leaf Node
    if(root.left_ptr === null && root.right_ptr === null) {
        result.push([...pathSoFar].join(' '));
        return;
    }
    
    
    if(root.left_ptr) {
        pathSoFar.push(root.left_ptr.val);
        helper(root.left_ptr, pathSoFar);
        pathSoFar.pop();
    }
    
    if(root.right_ptr) {
        pathSoFar.push(root.right_ptr.val);
        helper(root.right_ptr, pathSoFar);
        pathSoFar.pop();
    }
    
}
