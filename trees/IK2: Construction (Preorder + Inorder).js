/*
 * Complete the 'constructBinaryTree' function below.
 *
 * The function accepts INTEGER_ARRAY inorder and preorder as parameter and returns Root pointer of constructed binary tree.
 * Definition for Binary tree.
 * function TreeNode(value){
 *     this.value = value
 *     this.left = null
 *     this.right = null
 * }
 * 
 * LOGIC: 
 * 1. Pre-order Traversal's first element is always the root, followed by left subtree and right subtree.
 * 2. However we don't know the boundary when left and right nodes end.
 * 3. Inorder on the other hand has root in the middle, with left and right nodes to it's either ends.
 * 4. We find the index of that root in the in-order traversal (root indentification is done in step 1.)
 * 5. This helps us identify the number of nodes on the left and right (from inorder traversal)
 * 6. We use this leftRange and rightRange to divide 2 (and then do divide and conquer) 
 */
let inorderMap;
function constructBinaryTree(inorder, preorder) {
    // Write your code here
    inorderMap = new Map();
    inorder.forEach((node, index) => {
        inorderMap.set(node, index);
    });
    return helper(inorder, 0, inorder.length-1, preorder, 0, preorder.length-1);
    
}

function helper(inorder, startI, endI, preorder, startP, endP) {
    
    if((startI > endI) || (startP > endP)) return;
    
    let root = new TreeNode(preorder[startP]);
    let rootIndex = inorderMap.get(preorder[startP]);
    
    let leftRange = rootIndex - startI;
    let rightRange = endI - rootIndex;
    
    root.left = helper(inorder, startI, rootIndex-1, preorder, startP+1, startP+leftRange);
    root.right = helper(inorder, rootIndex+1, endI, preorder, endP-rightRange+1, endP);
    
    return root;
}

