/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    helper(nums, 0, nums.length-1);
    return nums;
};

function helper(nums, startIndex, endIndex) {
    
    if(startIndex > endIndex) return;
    let pivotIndex = startIndex + Math.floor((endIndex - startIndex)/2);
    // Lomoto's Partitioning: 
    swap(nums, startIndex, pivotIndex);
    let orange = startIndex + 1;
    let green = startIndex + 1;
    while(orange <= endIndex) {
        if(nums[orange] > nums[startIndex]) {
            orange = orange + 1;
        } else {
            swap(nums, green, orange);
            green = green + 1;
            orange = orange + 1;
        }
    }
    green = green - 1;
    pivotIndex = green;
    swap(nums, startIndex, pivotIndex);

    helper(nums, startIndex, pivotIndex-1);
    helper(nums, pivotIndex+1, endIndex);
}

function swap(nums, leftIndex, rightIndex) {
    let temp = nums[leftIndex];
    nums[leftIndex] = nums[rightIndex];
    nums[rightIndex] = temp;
}