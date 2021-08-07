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
 * @param {number} key
 * @return {TreeNode}
 */
/**
 * LOGIC:
 * 
 * 1. Find the node to be deleted by traversing the BST but keep track of parent.
 * 2. If node to be deleted is a 
 *  2A: Leaf: Simply cut the Parent -> Child connection
 *  2B: Parent with a single child: Connect Parent -> Node's child
 *  2C: Parent with 2 children: Replace node with successor, cut Successor's Parent -> Successor connection
 */
var deleteNode = function(root, key) {
    // No root
    if(root === null) return null;
    
    // Single element no match
    if(root.left === null && root.right === null && root.val !== key) return root;
    
    // If root itself is the key
    if(root.val === key) {
        // Root is also a leaf
        if(root.left === null && root.right === null) return null;
        // Only left or right branch
        else if(!root.left || !root.right) root = root.left || root.right;
        // Has both left and right child
        else if(root.left && root.right) {
            //console.log('findInorderSuccessor');
            findInorderSuccessor(root, key, null);
        }
        return root;
    }
    
    helper(root, key, null);
    return root;
};

function helper(root, key, parent) {
    
    if(root.val === key) {
        // If element is a leaf
        if(!root.left && !root.right) {
            if(parent.left && parent.left.val === key) parent.left = null;
            if(parent.right && parent.right.val === key) parent.right = null;
        }
        // If element only has only 1 child
        if(!root.left || !root.right) {
            if(parent.left && parent.left.val === key) parent.left = root.right || root.left;
            if(parent.right && parent.right.val === key) parent.right = root.right || root.left;
        }
        if(root.left && root.right) {
            //console.log('findInorderSuccessor');
            findInorderSuccessor(root, key, parent);
        }
    }
    else if(root.val < key) {
        if(root.right) {
            helper(root.right, key, root);
        }
    }
    else if(root.val > key) {
        if(root.left) {
            helper(root.left, key, root);
        }
    }
}

// Here we are sure that root would have a right child
function findInorderSuccessor(root, key, parent) {
    let _parent = root;
    let successor = root.right;
    if(!successor.left) {
        root.val = successor.val;
        root.right = successor.right;
        return;
    }
    
    while(successor.left) {
        _parent = successor;
        successor = successor.left;
    }
    //console.log(root.val + ' has a successor i.e. ' + successor.val);
    root.val = successor.val;
    _parent.left = successor.right;
}