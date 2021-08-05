/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */


public class Solution {
    /*
     * @param root: The root of the BST.
     * @param p: You need find the successor node of p.
     * @return: Successor of p.
     */
    TreeNode latestLeft;
    TreeNode successor;
    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
        if(root == null) return null;
        latestLeft = null;
        successor = null;
        // write your code here
        helper(root, p);
        return successor;
    }

    public void helper(TreeNode root, TreeNode p) {
        // If found the target element
        if(root.val == p.val) {
            // Case 1: 
            // Check if any right child and subsequent left paths exists
            if(root.right != null) {
                root = root.right;
                while(root.left != null) {
                    root = root.left;
                }
                successor = root;
                return;
            // Whatever was the latest node on which left turn was made is the successor
            // This node is tracked while traversing the BST while finding the target node
            } else {
                successor = latestLeft;
                return;
            }
            // Traversing the tree to find the target node before finding it's successor
        } else if(root.val < p.val) {
            if(root.right != null) {
                helper(root.right, p);
            }
        } else if(root.val > p.val) {
            if(root.left != null) {
                latestLeft = root;
                helper(root.left, p);
            }
        }
    }
}