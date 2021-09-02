/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    minHeap = new MinHeap();
    kth = k
    for(let i=0; i< nums.length; i++) {
        if(minHeap.size() < kth) {
            minHeap.insert(nums[i]);
        } else {
            if(nums[i] > minHeap.peek()) {
                minHeap.extractMin();
                minHeap.insert(nums[i]);
            }
        }        
    }
    console.log(minHeap.peek());
    return minHeap.peek();
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(minHeap.size() < kth) {
        minHeap.insert(val);
    } else {
        if(val > minHeap.peek()) {
            minHeap.extractMin();
            minHeap.insert(val);
        }
    }     
    return minHeap.peek();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MinHeap  {
	
    constructor() {
        // Blocking the 0th index, to simplify the logic to calculate parent index
        this.heap = [null];
    }
    
    // Returns the value at the top of the heap 
    peek() {
        if(this.heap[1] !== undefined) return this.heap[1];
    }
    
    printHeap() {
        return this.heap.slice(1);
    }

    // Returns the size of the heap 
    size() {
      return this.heap.length-1;
    }
    
    // Inserts element at the end of the heap and then heapifies it up
    insert(element) {
        this.heap.push(element);
        let currentIndex = this.heap.length-1;
      
      // Heapify Up
      while(currentIndex > 1) {
          let parentIndex = Math.floor(currentIndex / 2);
          // Compares added element with it's parent, if less, then swaps it with the parent 
          if (this.heap[currentIndex] < this.heap[parentIndex]) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
          } 
          // else the element is at the right location and breaks out of the bubbling up logic
          else break;
              currentIndex = parentIndex;    
      }
    }
    
    // Removes the element from the top of the heap, and rebalances the heap
    extractMin() {
        if(this.heap[1] !== undefined) {
          let topOfHeap =  this.heap[1];
        // Temporarily replace the top the heap with the last element
        [this.heap[1], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[1]];
        // and free up the last byte
        this.heap.splice(this.heap.length - 1);
        
        // Now the top of the heap would break the property of the min  heap, hence needs to be bubbled down to the right location.
        let parentIndex = 1;
        
        while(true) {
            // Calculate the left and right child indices for comparision with parent 
          let leftChildIndex = (parentIndex * 2);
            let rightChildIndex = (parentIndex * 2) + 1;
         
             // Checks if parent is greater gets swapped with the lower of the 2 children
             if((this.heap[parentIndex] > this.heap[leftChildIndex]) && ((this.heap[leftChildIndex] <= this.heap[rightChildIndex]) || this.heap[rightChildIndex] === undefined)) {
              [this.heap[parentIndex], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[parentIndex]];
              parentIndex = leftChildIndex;
             } else if (this.heap[parentIndex] > this.heap[rightChildIndex]) {
              [this.heap[parentIndex], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[parentIndex]];
              parentIndex = rightChildIndex;
             } else break;
        }
       return topOfHeap;
      }
    }
  }