/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    quickSelect(0, nums.length-1, nums, nums.length-k);
    return nums[nums.length-k];
};

function quickSelect(startIndex, endIndex, nums, k) {
    // Base Case
    if(startIndex > endIndex) return;
    // Partition 
    let pivotIndex = Math.floor((startIndex + endIndex)/2);
    let pivotValue = nums[pivotIndex];
    
    swap(nums, pivotIndex, startIndex);
    let leftPointer = startIndex + 1;
    let rightPointer = startIndex + 1;
    
    while(rightPointer <= endIndex) {
        if(nums[rightPointer] > pivotValue) {
            rightPointer =  rightPointer + 1;
        } else {
            swap(nums, leftPointer, rightPointer);
            leftPointer = leftPointer + 1;
            rightPointer = rightPointer + 1;
        }
    }
    
    leftPointer = leftPointer - 1;
    pivotIndex = leftPointer;
    swap(nums, startIndex, pivotIndex);
    
    // Recursive Case 
    if(pivotIndex === k) return;
    if(pivotIndex < k ) {
        quickSelect(pivotIndex+1, endIndex, nums, k);
    } else {
        quickSelect(startIndex, pivotIndex-1, nums, k);
    }
}

function swap(nums, left, right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}