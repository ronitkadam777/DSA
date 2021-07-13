/*
function Node (data)
{
    this.data = data
    this.left = null
    this.right = null
 }
*/
let lcaValue;
function lca (root, node_a, node_b) {
    lcaValue = null;
    //Write your code here
    if(root === null) return null;
    helper(root, node_a, node_b);
    return lcaValue;
}

function helper(root, node_a, node_b) {

    let found_a = false;
    let found_b = false;
    
    // Activity at child: if match found, set corresponding value to true
    // Set find values to true if found
    if(root.data === node_a.data) found_a = true;
    if(root.data === node_b.data) found_b = true;
    
    // Special Case, set LCA if node itself matches with both values
    if(found_a && found_b) {
        lcaValue = root.data;    
    }
    
    // Leaf Node
    if(root.left === null && root.right === null) {
        return [found_a, found_b];
    }
    
    let found_l_a = false;
    let found_l_b = false;
    let found_r_a = false;
    let found_r_b = false;
    
    if(root.left) {
        [found_l_a, found_l_b] = helper(root.left, node_a, node_b);
    }
    
    if(root.right) {
        [found_r_a, found_r_b] = helper(root.right, node_a, node_b);
    }
    
    // Activity at Parent:
    // To check if A have been found in any of the lower paths, if yes, pass foundA as true
    // To check if B have been found in any of the lower paths, if yes, pass foundB as true
    if(!found_a) {
        found_a = found_l_a || found_r_a;    
    }
    
    if(!found_b) {
        found_b = found_l_b || found_r_b;    
    }
    
    if(!lcaValue) {
        if(found_a && found_b) {
            lcaValue = root.data;
        }
    }

    return [found_a, found_b];
}

