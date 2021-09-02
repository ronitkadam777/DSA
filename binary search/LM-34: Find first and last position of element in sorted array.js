/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let firstIndex, secondIndex;
var searchRange = function(nums, target) {
    firstIndex = -1;
    secondIndex = -1;
    return helper(nums, target);
};

function helper(nums, target) {
    let start = 0;
    let end = nums.length-1;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(nums[mid] < target) {
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    if(nums[start] === target) {
        firstIndex = start;
        secondIndex = start;
    }
    
    end = nums.length-1;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(nums[mid] <= target) {
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    if(nums[end] === target) {
        secondIndex = end;
    }
    return [firstIndex, secondIndex];
}