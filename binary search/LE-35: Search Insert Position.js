/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    
    while(start <= end) {
        let midIndex = Math.floor(start + (end - start)/2);
        if(nums[midIndex] === target) return midIndex;
        else if(nums[midIndex] > target) end = midIndex -1;
        else start = midIndex + 1;
    }
    return start;
};