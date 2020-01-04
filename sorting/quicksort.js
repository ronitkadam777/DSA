/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length < 2) return nums;
    return quickSortHelper(nums, 0, nums.length - 1);
};

function quickSortHelper(nums, startIndex, endIndex) {
    //Base Case
    if(startIndex >= endIndex) return null;
    //Selecting PivotIndex from a valid range of the array in the iteration
    let pivotIndex = startIndex + Math.floor((endIndex - startIndex)/2);
    //Lomoto's Partitioning
    //Swaps pivot with first position of array in the iteration
    swap(nums, startIndex, pivotIndex);
    //Assigns the starting index of the iteration as a pivotIndex
    pivotIndex = startIndex;
    //Initializing the left / orange and right / green pointers
    let left = startIndex + 1;
    let right = startIndex + 1;
    //Actual partitioning logic
    while(right <= endIndex) {
        if(nums[right] > nums[pivotIndex]) {
            right++;
        } else {
            swap(nums, left, right);
            left++;
            right++;
        }
    }
    //Bringing back the left pointer into the < pivot value territory
    left--;
    //Swapping the pivot with the max of the < pivot territory
    //This now ensures all elements before / after pivot as less / greater than it resp.
    swap(nums, pivotIndex, left);
    //Re-assigning startIndex to the original start index of the array in iteration (which was pivotIndex)
    startIndex = pivotIndex;
    //Reassigning pivotIndex to the left pointer 
    pivotIndex = left;
    //Dividing the array into a before and after pivot for sorting
    quickSortHelper(nums, startIndex, pivotIndex - 1);
    quickSortHelper(nums, pivotIndex + 1, endIndex);
    return nums;
}

//Helper function that swaps two elements of an array
function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}