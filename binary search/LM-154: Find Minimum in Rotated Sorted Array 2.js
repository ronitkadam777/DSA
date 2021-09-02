/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 1) return nums[0];
    if(nums[0] < nums[nums.length-1]) return nums[0];
    return helper(nums);
};

function helper(nums) {
    let start = processInput(nums);
    let end = nums.length-1;
    
    // Edge case: 
    // Incase only 1 element after pre-processing, return value
    // instead of applying BS
    if(start === end) {
        return nums[start];
    }

    let polestar = nums[end];
    
    // Binary Search 
    while(start <= end) {
        let mid = start + Math.floor((end - start)/2);
        // If mid > polestar, focus on right, else left ([3,1,3,3,3] is a valid case where we need to go left)
        if(nums[mid] > polestar) {
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    return nums[start];
}

// Removes all duplicate polestars from the start of the array
// Returns the startIndex of the first non-duplicate element
function processInput(nums) {
    let startIndex = 0;
    let endIndex = nums.length-1;
    let lastElement = nums[endIndex];
    for(let i=0; i < nums.length-1; i++) {
        if(nums[i] !== lastElement) {
            break;
        } else {
            startIndex = startIndex + 1;
        }
    }
    return startIndex;
}