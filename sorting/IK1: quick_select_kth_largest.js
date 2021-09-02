/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(nums.length === 0) return null;
    if(nums.length === 1) return nums;
    const array = quickSort(nums, 0, nums.length -1, k);
    console.log(array);
    return array[nums.length - k];
};

function quickSort(nums, startIndex, endIndex, k) {
    //Base Case
    let targetIndex = (nums.length - k);
    if(startIndex >= endIndex) return nums;
    //Randomly select the pivot in the above range
    let pivotIndex = startIndex + Math.floor((endIndex - startIndex)/2);
    
    //Lomoto's Partitioning Code
    swap(nums, startIndex, pivotIndex);
    let largerPointer = startIndex;
    let smallerPointer = startIndex;
    while(largerPointer <= endIndex) {
        if(nums[largerPointer] > nums[startIndex]) {
            largerPointer++;
        } else {
            swap(nums, smallerPointer, largerPointer);
            smallerPointer++;
            largerPointer++;
        }
    }
    smallerPointer = smallerPointer - 1;
    swap(nums, smallerPointer, startIndex);
    pivotIndex = smallerPointer;
    if(pivotIndex === targetIndex) {
        return nums;
    } else if(pivotIndex < targetIndex) {
        quickSort(nums, pivotIndex+1, endIndex, k);
    } else {
        quickSort(nums, startIndex, pivotIndex-1, k);
    }
    return nums;
}

function swap(nums, firstIndex, secondIndex) {
    if(nums[firstIndex] !== nums[secondIndex]) {
        let temp = nums[firstIndex];
        nums[firstIndex] = nums[secondIndex];
        nums[secondIndex] = temp;   
    }
}