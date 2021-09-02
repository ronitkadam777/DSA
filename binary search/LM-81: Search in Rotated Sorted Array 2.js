/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    
    let start = 0;
    let end = nums.length - 1;
    
    if(nums[0] === target) return true;
    
    while(nums[start] === nums[nums.length-1]) {
        start = start + 1;
    }
    
    while(start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        
        if(nums[mid] === target) return true;
        
        // Check if LHS is a valid zone 
        if(nums[start] <= nums[mid]) {
            if((nums[start] <= target) && (target <= nums[mid])) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } // Check if RHS is a valid zone
        else if(nums[mid] <= nums[end]) {
            if((nums[mid] <= target)  && (target <= nums[end])) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return false;

    
};