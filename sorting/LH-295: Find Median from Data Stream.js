/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    minHeap = new MinHeap();
    maxHeap = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(!maxHeap.size()) {
        //console.log('Adding '+ num + ' into MaxHeap');
        maxHeap.insert(-num);
    } else if(num < -maxHeap.peek()) {
        //console.log('Adding '+ num + ' into MaxHeap');
        maxHeap.insert(-num);
    } else {
        //console.log('Adding '+ num + ' into MinHeap');
        minHeap.insert(num);
    }
    if(maxHeap.size() - minHeap.size() === 2) {
        minHeap.insert(-maxHeap.extractMin());
    } else if(minHeap.size() - maxHeap.size() === 2) {
        maxHeap.insert(-minHeap.extractMin());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let median = 0;
    if(maxHeap.size() === minHeap.size()) {
        median = (minHeap.peek() -maxHeap.peek())/2;
        //console.log(minHeap.peek());
        //console.log(-maxHeap.peek());
    } else if(maxHeap.size() > minHeap.size()) {
        median = -maxHeap.peek();
    } else {
        median = minHeap.peek();
    }
    return median;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
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