/*
* Complete the 'mirror_image' function below.
*
* The function accepts root node of binary tree as parameter.
*
* Structure of TreeNode will be:
* class TreeNode
* {
*     constructor(data)
*     {
*         this.data = data;
*         this.left = null;
*         this.right = null;
*     }
* }
*/
function mirror_image(root) {
	// Write your code here
	if(root === null) return null;
	helper(root);
	return root;
}

function helper(root) {
    
    let temp = new TreeNode(null);
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    if(root.left) {
        helper(root.left);
    }
    
    
    if(root.right) {
        helper(root.right);
    }
}

