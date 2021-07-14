/*
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left_ptr = null;
            this.right_ptr = null;
        }
    }
*/

/**
 * 1. Use a global stack to imitate the recursion and callstack.
 * 2. Do differentiate visiting a node, add states like 
 *  Landed: Visited a node for the first time
 *  Arrived: Once landed and TOS, change to "Arrived" and check for left subtree
 *  Interim: Once arrived and TOS, change to "Interim" and check for right subtree
 *  Departure: Once Interim, pop out of stack
 * 
 * 3. hasNext() will only check if the next element exist. 
 * Maintain a global nextValue, if null, call helper() and set nextValue and return hasNext as true if nextValue is not null
 * 
 * 4. next() will return the actual next value:
 * if hasNext() is already run before, nextValue would have captured the result, return nextValue and reset it to null, so that subsequent next() don't get stuck to the same node.
 * if nextValue is already null, then call helper() and set nextValue and return that, but reset it to null, so that subsequent next() processes the next value. 
 */
class BTIterator {
    constructor(root) {
        this.root = root; 
        this.stack = [[root, 'landed']];
        this.nextValue = null;
        // initialize here
    }
    
    hasNext() {
        if(this.nextValue) {
            return true;
        } else if(this.nextValue === null) {
            this.nextValue = this.helper();
            if(this.nextValue) return true;
            else return false;
        }
    }
    
    next() {
        if(this.nextValue) {
            let result = this.nextValue;
            this.nextValue = null;
            return result;
        } else {
            this.nextValue = helper();
            if(this.nextValue) {
                let result = this.nextValue;
                this.nextValue = null;
                return result;
            }
            else return null;
        } 
    }
    
    helper() {
        while(this.stack.length) {
            const [treeNode, status] = this.stack[this.stack.length-1];
            if(status === 'landed') {
                this.stack[this.stack.length-1] = [treeNode, 'arrived'];
                if(treeNode.left_ptr) {
                    this.stack.push([treeNode.left_ptr, 'landed']);
                }
            }
            
            if(status === 'arrived') {
                this.stack[this.stack.length-1] = [treeNode, 'interim'];
                let result = this.stack[this.stack.length-1][0].val;
                if(treeNode.right_ptr) {
                    this.stack.push([treeNode.right_ptr, 'landed']);
                }
                return result;
            }
            
            
            if(status === 'interim') {
                this.stack.pop();
            }
        }
    }
}

