/**
 * Brute Force Solution:
 * 1. Inorder Traversal on both trees and add them to common array
 * 2. Sort array
 * 3. Construct Tree (Top to Down Construction)
 * 
 * Alternate Solution: 
 * 1. Convert both trees to linked list inplace 
 * 2. Merge the two lists into one
 * 3. Construct Tree from list (Left to Right Construction)
 */
let nodes;
let head;
function mergeTwoBSTs(root1, root2) {
    /*
     * Write your code here.
     */
    nodes = [];
    inorder(root1);
    inorder(root2);

    nodes.sort((a,b) => a-b);
    return constructTree(0, nodes.length-1);
}

function inorder(root) {
    if(root === null) return;
    
    if(root.left) {
        inorder(root.left);    
    }
    
    nodes.push(root.key);
    
    if(root.right) {
        inorder(root.right);    
    }
    
}

function constructTree(startIndex, endIndex) {

    if(startIndex > endIndex) return null; //new Node(null);
    let midIndex = Math.floor((startIndex + endIndex)/2);

    let root = new Node();
    root.key = nodes[midIndex];
    root.left = constructTree(startIndex, midIndex-1);
    root.right = constructTree(midIndex+1, endIndex);

    return root;
}

