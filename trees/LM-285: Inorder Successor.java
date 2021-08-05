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
        
        if(root.val == p.val) {
            // Check if any right child and subsequent left paths exists
            if(root.right != null) {
                root = root.right;
                while(root.left != null) {
                    root = root.left;
                }
                successor = root;
                //System.out.println("Found successor "+ successor.val);
                return;
            } else {
                successor = latestLeft;
                //System.out.println("Found successor "+ successor.val);
                return;
            }
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