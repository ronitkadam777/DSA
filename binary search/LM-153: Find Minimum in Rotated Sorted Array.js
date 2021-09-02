/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let poleStar = nums[end];
    
    while(start <= end) {
        let midIndex = Math.floor((start + (end - start)/2));
        if(nums[midIndex] > poleStar) {
            start = midIndex + 1;   
        } else {
            end = midIndex - 1;
        }
    }
    return nums[start];
};