/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length-1);
};

function binarySearch(nums, target, startIndex, endIndex) {
    // Base Case
    if(startIndex > endIndex) {
        return -1;
    }
    
    let midIndex = startIndex + Math.floor((endIndex - startIndex)/2);
    
    if(nums[midIndex] === target) {
        return midIndex;
    } else if(nums[midIndex] > target) {
        return binarySearch(nums, target, startIndex, midIndex-1);
    } else {
        return binarySearch(nums, target, midIndex+1, endIndex);
    }
}