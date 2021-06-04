/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums < 2) return nums;
    
    quickSortHelper(nums, 0, nums.length);
    return nums;
};

function quickSortHelper(nums, startIndex, endIndex) {
    if(startIndex >= endIndex) return;
    let pivotIndex = startIndex + Math.floor((endIndex - startIndex)/2);
    let pivotValue = nums[pivotIndex];
    swap(nums, startIndex, pivotIndex);
    let green = startIndex + 1;
    let orange = startIndex + 1;
    while(green <= endIndex) {
        if(nums[green] <= pivotValue) {
            swap(nums, orange, green);
            green = green + 1;
            orange = orange + 1;
        } else {
            green = green + 1;
        }
    }
    swap(nums, startIndex, orange-1);
    // Ensure the pivotIndex is updated after the partion
    pivotIndex = orange - 1;
    quickSortHelper(nums, startIndex, pivotIndex-1);
    quickSortHelper(nums, pivotIndex+1, endIndex);
}


function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}