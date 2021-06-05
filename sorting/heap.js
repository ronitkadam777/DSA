/* 
    1. Property: Data structure in which every parent element's value is less than the left and right child's value
    2. This is physically stored as an array but can be logically represented as a tree (complete tree - last level is as left as possible)
  	    Parent Index = Child Index / 2;
  	    Left Child Index = (Parent * 2) + 1;
  	    Right Child Index = (Parent * 2) + 2;
    3. This ensures bubbling up the newly added element to ensure the property is maintained, or extracting the min and rebalancing the heap runs in log(n) time for every insertion or extraction
*/
class MinHeap  {
	
    constructor() {
        // Blocking the 0th index, to simplify the logic to calculate parent index
        this.heap = [null];
    }
    
    // Returns the value at the top of the heap 
    peek() {
        if(this.heap[1]) return this.heap[1];
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
        if(this.heap[1]) {
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
  
  var obj = new MinHeap();
  obj.insert(5);
  obj.insert(1);
  obj.insert(3);
  obj.insert(4);
  obj.insert(2);
  obj.insert(6);
  obj.insert(7);
  
  console.log(obj.extractMin());
  console.log(obj.extractMin());
  console.log(obj.extractMin());
  console.log(obj.extractMin());
  console.log(obj.extractMin());
  console.log(obj.extractMin());
  console.log(obj.extractMin());