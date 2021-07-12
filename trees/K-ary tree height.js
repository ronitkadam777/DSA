
/*
 * Complete the function below.
 */

/*
    For your reference:
    
    function TreeNode()
    {
        this.children = [];
    }
*/
let height;
let globalHeight;
function find_height(root) {
    globalHeight = 0;
    if(root === null) {
        return 0;
    } else if(root.children.length === 0) {
        return 0;
    }
    dfs(root, 1);
    return globalHeight-1;
}

function dfs(root, height) {

    if(root === null) return;
    
    // Leaf node along a path 
    if(root.children.length === 0) {
        if(height > globalHeight) {
            globalHeight = height;
        }
        return;
    }
    
    for(let i=0; i< root.children.length; i++) {
        dfs(root.children[i], height+1);
    }
}

